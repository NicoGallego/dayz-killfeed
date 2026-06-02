import { EmbedBuilder } from 'discord.js'
import { ConnectEvent, getNearestLocation } from '@killfeed/parser'

interface ConnectEmbedOptions {
    event: ConnectEvent
    map: string
}

export function buildConnectEmbed({ event, map }: ConnectEmbedOptions): EmbedBuilder {
    const izurvive = `https://izurvive.com/${map}/#location=${event.posX.toFixed(1)};${event.posY.toFixed(1)}`
    const location = getNearestLocation(map, event.posX, event.posY)

    return new EmbedBuilder()
        .setColor(0x4ADE80)
        .setTitle(`<:icon_connect_white:1511171076980215958> · CONNECTED · ${event.timestamp.toLocaleTimeString('fr-FR')}`)
        .setDescription(`**${event.playerName}** connected to the game server.`)
        .addFields(
            {
                name: '<:icon_pin_white:1511090740296548392> | Location',
                value: `[**${location}**](${izurvive})`,
            },
        )
        .setFooter({ text: 'Monarch' })
        .setTimestamp()
}