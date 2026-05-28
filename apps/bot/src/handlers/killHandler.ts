import { prisma } from '@killfeed/db'
import { KillEvent } from '@killfeed/parser'
import { sendKillfeedEmbed } from '../discord'
import { buildKillEmbed } from '../embeds/killEmbed'

export async function handleKill(event: KillEvent): Promise<void> {
    console.log(`[KILL] ${event.killerName} a tué ${event.victimName} avec ${event.weapon} à ${event.distance}m`)

    const [killer, victim] = await Promise.all([
        prisma.player.upsert({
            where: { nitradoId: event.killerId },
            create: { nitradoId: event.killerId, name: event.killerName },
            update: { name: event.killerName },
        }),
        prisma.player.upsert({
            where: { nitradoId: event.victimId },
            create: { nitradoId: event.victimId, name: event.victimName },
            update: { name: event.victimName },
        }),
    ])

    const newStreak = killer.currentKillstreak + 1
    const newBestStreak = Math.max(killer.bestKillstreak, newStreak)
    const newKills = killer.killsPvp + 1
    const newKdRatio = newKills / Math.max(killer.deathsPvp, 1)
    const newLongestKill = Math.max(killer.longestKillDistance, event.distance)

    await prisma.player.update({
        where: { id: killer.id },
        data: {
            killsPvp: newKills,
            kdRatio: newKdRatio,
            currentKillstreak: newStreak,
            bestKillstreak: newBestStreak,
            longestKillDistance: newLongestKill,
        },
    })

    const newVictimDeaths = victim.deathsPvp + 1

    let timeAliveSeconds = 0
    if (victim.isOnline && victim.lastDeathAt) {
        timeAliveSeconds = Math.floor(
            (event.timestamp.getTime() - victim.lastDeathAt.getTime()) / 1000
        )
    } else if (victim.isOnline && !victim.lastDeathAt) {
        const session = await prisma.session.findFirst({
            where: { playerId: victim.id, disconnectedAt: null },
            orderBy: { connectedAt: 'desc' },
        })
        if (session) {
            timeAliveSeconds = Math.floor(
                (event.timestamp.getTime() - session.connectedAt.getTime()) / 1000
            )
        }
    }

    const timeAliveText = timeAliveSeconds > 0
        ? `${Math.floor(timeAliveSeconds / 3600)}h ${Math.floor((timeAliveSeconds % 3600) / 60)}m ${timeAliveSeconds % 60}s`
        : 'Unknown'

    await prisma.player.update({
        where: { id: victim.id },
        data: {
            deathsPvp: newVictimDeaths,
            kdRatio: victim.killsPvp / Math.max(newVictimDeaths, 1),
            currentKillstreak: 0,
            lastDeathAt: event.timestamp,
        },
    })

    await prisma.killEvent.create({
        data: {
            timestamp: event.timestamp,
            killerId: killer.id,
            victimId: victim.id,
            weapon: event.weapon,
            distance: event.distance,
            killedPosX: event.victimPosX,
            killedPosY: event.victimPosY,
            killedPosZ: event.victimPosZ,
            killerPosX: event.killerPosX,
            killerPosY: event.killerPosY,
            killerPosZ: event.killerPosZ,
            killerStreakAtKill: newStreak,
            fatalHitZone: event.fatalHitZone,
            ammoType: event.ammoType,
            timeAliveSeconds: timeAliveSeconds > 0 ? timeAliveSeconds : null,
        },
    })

    const embed = buildKillEmbed({
        event,
        newKills,
        newKdRatio,
        newStreak,
        newVictimDeaths,
        victimKills: victim.killsPvp,
        timeAliveText,
    })

    await sendKillfeedEmbed(embed)
}