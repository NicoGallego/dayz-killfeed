import {EmbedBuilder} from 'discord.js'
import {KillEvent, getNearestLocation} from '@killfeed/parser'

interface KillEmbedOptions {
    event: KillEvent
    newKills: number
    newKdRatio: number
    newStreak: number
    newVictimDeaths: number
    victimKills: number
    timeAliveText: string
    map: string
}

export function buildKillEmbed({
                                   event,
                                   newKills,
                                   newKdRatio,
                                   newStreak,
                                   newVictimDeaths,
                                   victimKills,
                                   timeAliveText,
                                   map
                               }: KillEmbedOptions): EmbedBuilder {
    const streakText = newStreak > 1 ? `${newStreak}x Killstreak` : '1x Killstreak'

    const killerIzurvive = `https://izurvive.com/${map}/#location=${event.killerPosX.toFixed(1)};${event.killerPosY.toFixed(1)}`
    const victimIzurvive = `https://izurvive.com/${map}/#location=${event.victimPosX.toFixed(1)};${event.victimPosY.toFixed(1)}`
    const killerLocation = getNearestLocation(map, event.killerPosX, event.killerPosY)
    const victimLocation = getNearestLocation(map, event.victimPosX, event.victimPosY)

    return new EmbedBuilder()
        .setColor(0x2ECC71)
        .setTitle(`☠️ · Player Kill · ${event.timestamp.toLocaleTimeString('fr-FR')}`)
        .setDescription(`**${event.victimName}** was killed by **${event.killerName}**.`)
        .addFields(
            {name: '',
                value: [].join('\n')
            },
            {
                name: '🗂️ | Details',
                value: [
                    `- Weapon: **${event.weapon}**`,
                    `- Ammo: **${event.ammoType ?? 'Unknown'}**`,
                    `- Distance: **${event.distance.toFixed(2)}m**`,
                    `- Body Part: **${event.fatalHitZone ?? 'Unknown'}**`,
                ].join('\n'),
            },
            {
                name: '',
                value: [].join('\n')
            },
            {
                name: `📋 | ${event.killerName}`,
                value: [
                    `**${newKdRatio.toFixed(2)} K/D** | **${newKills} Kills**`,
                    `**${streakText}**`,
                    `**[📍 Killer](${killerIzurvive})** – _${killerLocation}_`
                ].join('\n'),
            },
            {
                name: '',
                value: [].join('\n')
            },
            {
                name: `📋 | ${event.victimName}`,
                value: [
                    `**${(victimKills / Math.max(newVictimDeaths, 1)).toFixed(2)} K/D** | **${newVictimDeaths} Deaths**`,
                    `⏱️ Time Alive: **${timeAliveText}**`,
                    `**[📍 Victim](${victimIzurvive})** – _${victimLocation}_`
                ].join('\n'),
            },
            {
                name: '',
                value: [].join('\n')
            },
        )
        .setFooter({text: 'Monarch'})
        .setTimestamp()
}