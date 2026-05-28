import { EmbedBuilder } from 'discord.js'
import { KillEvent } from '@killfeed/parser'

interface KillEmbedOptions {
    event: KillEvent
    newKills: number
    newKdRatio: number
    newStreak: number
    newVictimDeaths: number
    victimKills: number
    timeAliveText: string
}

export function buildKillEmbed({
                                   event,
                                   newKills,
                                   newKdRatio,
                                   newStreak,
                                   newVictimDeaths,
                                   victimKills,
                                   timeAliveText,
                               }: KillEmbedOptions): EmbedBuilder {
    const streakText = newStreak > 1 ? `${newStreak}x Killstreak` : '1x Killstreak'

    const killerIzurvive = `[📍 Position](https://izurvive.com/livonia/#location=${event.killerPosX.toFixed(1)};${event.killerPosY.toFixed(1)})`
    const victimIzurvive = `[📍 Position](https://izurvive.com/livonia/#location=${event.victimPosX.toFixed(1)};${event.victimPosY.toFixed(1)})`

    return new EmbedBuilder()
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
                    `**${(victimKills / Math.max(newVictimDeaths, 1)).toFixed(2)} K/D** | **${newVictimDeaths} Deaths**`,
                    `⏱️ Time Alive: **${timeAliveText}**`,
                    victimIzurvive,
                ].join('\n'),
            },
        )
        .setFooter({ text: `BZone Killfeed • ${event.timestamp.toLocaleTimeString('fr-FR')}` })
}