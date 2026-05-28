import { prisma } from '@killfeed/db'
import { KillEvent } from '@killfeed/parser'
import { EmbedBuilder } from 'discord.js'
import { sendKillfeedEmbed } from '../discord'

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
    await prisma.player.update({
        where: { id: victim.id },
        data: {
            deathsPvp: newVictimDeaths,
            kdRatio: victim.killsPvp / Math.max(newVictimDeaths, 1),
            currentKillstreak: 0,
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
        },
    })

    const streakText = newStreak > 1 ? `${newStreak}x Killstreak` : '1x Killstreak'

    const killerIzurvive = `[📍 Position](https://izurvive.com/livonia/#location=${event.killerPosX.toFixed(1)};${event.killerPosZ.toFixed(1)})`
    const victimIzurvive = `[📍 Position](https://izurvive.com/livonia/#location=${event.victimPosX.toFixed(1)};${event.victimPosZ.toFixed(1)})`

    const embed = new EmbedBuilder()
        .setColor(0x2ECC71)
        .setTitle(`☠️ · Player Kill · ${event.timestamp.toLocaleTimeString('fr-FR')}`)
        .setDescription(`**${event.victimName}** was killed by **${event.killerName}**.`)
        .addFields(
            {
                name: '🗂️ · Details',
                value: [
                    `• Weapon: **${event.weapon}**`,
                    `• Ammo: **${event.ammoType ?? 'Unknown'}**`,
                    `• Distance: **${event.distance.toFixed(2)}m**`,
                    `• Body Part: **${event.fatalHitZone ?? 'Unknown'}**`,
                ].join('\n'),
            },
            {
                name: `📋 · ${event.killerName}`,
                value: [
                    `**${newKdRatio.toFixed(2)} K/D** | **${newKills} Kills**`,
                    `**${streakText}**`,
                    killerIzurvive,
                ].join('\n'),
            },
            {
                name: `📋 · ${event.victimName}`,
                value: [
                    `**${(victim.killsPvp / Math.max(newVictimDeaths, 1)).toFixed(2)} K/D** | **${newVictimDeaths} Deaths**`,
                    `**Streak reset**`,
                    victimIzurvive,
                ].join('\n'),
            },
        )
        .setFooter({ text: `BZone Killfeed • ${event.timestamp.toLocaleTimeString('fr-FR')}` })

    await sendKillfeedEmbed(embed)
}