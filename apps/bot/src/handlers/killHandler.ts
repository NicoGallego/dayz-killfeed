import { playerRepo, sessionRepo, killEventRepo, configRepo } from '@killfeed/db'
import { KillEvent } from '@killfeed/parser'
import { sendKillfeedEmbed } from '../discord'
import { buildKillEmbed } from '../embeds/killEmbed'
import { computeKillerStats, computeVictimStats, computeTimeAlive } from '../services/killStatsService'

export async function handleKill(event: KillEvent): Promise<void> {
    console.log(`[KILL] ${event.killerName} a tué ${event.victimName} avec ${event.weapon} à ${event.distance}m`)

    const [killer, victim, map] = await Promise.all([
        playerRepo.upsertPlayer(event.killerId, event.killerName),
        playerRepo.upsertPlayer(event.victimId, event.victimName),
        configRepo.getConfig('map'),
    ])

    const session = victim.isOnline && !victim.lastDeathAt
        ? await sessionRepo.findLatestOpenSession(victim.id)
        : null

    const killerStats = computeKillerStats(killer, event.distance)
    const { seconds: timeAliveSeconds, text: timeAliveText } = computeTimeAlive(victim, event.timestamp, session)
    const victimStats = computeVictimStats(victim, event.timestamp)

    await Promise.all([
        playerRepo.updateKillerStats(killer.id, killerStats),
        playerRepo.updateVictimStats(victim.id, victimStats),
        killEventRepo.createKillEvent({
            timestamp: event.timestamp,
            killerId: killer.id,
            victimId: victim.id,
            weapon: event.weapon,
            ammoType: event.ammoType,
            distance: event.distance,
            fatalHitZone: event.fatalHitZone,
            killedPosX: event.victimPosX,
            killedPosY: event.victimPosY,
            killedPosZ: event.victimPosZ,
            killerPosX: event.killerPosX,
            killerPosY: event.killerPosY,
            killerPosZ: event.killerPosZ,
            killerStreakAtKill: killerStats.currentKillstreak,
            timeAliveSeconds: timeAliveSeconds > 0 ? timeAliveSeconds : null,
        }),
    ])

    const embed = buildKillEmbed({
        event,
        newKills: killerStats.killsPvp,
        newKdRatio: killerStats.kdRatio,
        newStreak: killerStats.currentKillstreak,
        newVictimDeaths: victimStats.deathsPvp,
        victimKills: victim.killsPvp,
        timeAliveText,
        map: map ?? 'livonia',
    })

    await sendKillfeedEmbed(embed)
}
