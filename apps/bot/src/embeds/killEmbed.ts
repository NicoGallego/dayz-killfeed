import {EmbedBuilder} from 'discord.js'
import {KillEvent, getNearestLocation} from '@killfeed/parser'

const KILL_PHRASES = [
    'eliminated',
    'neutralized',
    'terminated',
    'took down',
    'killed',
] as const

function getKillPhrase(): string {
    return KILL_PHRASES[Math.floor(Math.random() * KILL_PHRASES.length)]
}

interface KillEmbedOptions {
    event: KillEvent
    killerKills: number
    killerKd: number
    streakText: string
    victimDeaths: number
    victimKd: number
    timeAliveText: string
    map: string
}

export function buildKillEmbed({
                                   event,
                                   killerKills,
                                   killerKd,
                                   streakText,
                                   victimDeaths,
                                   victimKd,
                                   timeAliveText,
                                   map,
                               }: KillEmbedOptions): EmbedBuilder {
    const killerIzurvive = `https://izurvive.com/${map}/#location=${event.killerPosX.toFixed(1)};${event.killerPosY.toFixed(1)}`
    const victimIzurvive = `https://izurvive.com/${map}/#location=${event.victimPosX.toFixed(1)};${event.victimPosY.toFixed(1)}`
    const killerLocation = getNearestLocation(map, event.killerPosX, event.killerPosY)
    const victimLocation = getNearestLocation(map, event.victimPosX, event.victimPosY)

    return new EmbedBuilder()
        .setColor(0x4F46E5)
        .setTitle(`<:icon_sphere_white:1511091623784615957> · ELIMINATION · ${event.timestamp.toLocaleTimeString('fr-FR')}`)
        .setDescription(`**${event.killerName}** ${getKillPhrase()} **${event.victimName}**.`)
        .addFields(
            {
                name: '\u200B',
                value: '',
            },
            {
                name: `<:icon_killer_white:1511090743756980344> | Killer`,
                value: [
                    `**${event.killerName}**`,
                    `**${killerKd.toFixed(2)} K/D**  |  **${killerKills} Kills**`,
                    `**${streakText}**`,
                ].join('\n'),
            },
            {
                name: '\u200B',
                value: '',
            },
            {
                name: `<:icon_victim2_white:1511096224814727259> | Victim`,
                value: [
                    `**${event.victimName}**`,
                    `**${victimKd.toFixed(2)} K/D**  |  **${victimDeaths} Deaths**`,
                    `Time Alive: **${timeAliveText}**`,
                ].join('\n'),
            },
            {
                name: '\u200B',
                value: '',
            },
            {
                name: '<:icon_file_white:1511029397245792366> | Details',
                value: [
                    `- Weapon: **${event.weapon}**`,
                    `- Ammo: **${event.ammoType ?? 'Unknown'}**`,
                    `- Distance: **${event.distance.toFixed(2)}m**`,
                    `- Impact zone: **${event.fatalHitZone ?? 'Unknown'}**`,
                ].join('\n'),
            },
            {
                name: '\u200B',
                value: '',
            },
            {
                name: '<:icon_pin_white:1511090740296548392> | Location',
                value: [
                    `[**Killer**](${killerIzurvive}) — _${killerLocation}_`,
                    `[**Victim**](${victimIzurvive}) — _${victimLocation}_`,
                ].join('\n'),
            },
            {
                name: '\u200B',
                value: '',
            },
        )
        .setFooter({text: 'Monarch'})
        .setTimestamp()
}