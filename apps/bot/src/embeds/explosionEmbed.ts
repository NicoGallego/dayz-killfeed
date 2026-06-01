import {EmbedBuilder} from 'discord.js'
import {PveDeathEvent, getNearestLocation} from '@killfeed/parser'

interface ExplosionEmbedOptions {
    event: PveDeathEvent
    victimDeaths: number
    victimKd: number
    map: string
}

export function buildExplosionEmbed({
                                        event,
                                        victimDeaths,
                                        victimKd,
                                        map,
                                    }: ExplosionEmbedOptions): EmbedBuilder {
    const izurvive = `https://izurvive.com/${map}/#location=${event.posX.toFixed(1)};${event.posY.toFixed(1)}`
    const location = getNearestLocation(map, event.posX, event.posY)

    return new EmbedBuilder()
        .setColor(0xF97316)
        .setTitle(`<:icon_sphere_white:1511091623784615957> · ELIMINATION · ${event.timestamp.toLocaleTimeString('fr-FR')}`)
        .setDescription(`**${event.playerName}** was killed by **${event.killedBy}**.`)
        .addFields(
            {
                name: '\u200B',
                value: '',
            },
            {
                name: `<:icon_grenade_white:1511150417340530718> | Victim`,
                value: [
                    `**${event.playerName}**`,
                    `**${victimKd.toFixed(2)} K/D** | **${victimDeaths} Deaths**`,
                    '\u200B',
                ].join('\n'),
            },

            {
                name: '<:icon_pin_white:1511090740296548392> | Location',
                value: [
                    `[**${location}**](${izurvive})`,
                    '\u200B',
                ].join('\n'),

            },
        )
        .setFooter({text: 'Monarch'})
        .setTimestamp()
}