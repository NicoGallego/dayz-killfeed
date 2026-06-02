import { EmbedBuilder } from 'discord.js'
import { DisconnectEvent, getNearestLocation } from '@killfeed/parser'

interface DisconnectEmbedOptions {
    event: DisconnectEvent
    sessionSeconds: number
    totalSecondsOnline: number
    map: string
}

function formatDuration(seconds: number): string {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return h > 0
        ? `${h}h ${m}m ${s}s`
        : `${m}m ${s}s`
}

export function buildDisconnectEmbed({
    event,
    sessionSeconds,
    totalSecondsOnline,
    map,
}: DisconnectEmbedOptions): EmbedBuilder {
    const izurvive = `https://izurvive.com/${map}/#location=${event.posX.toFixed(1)};${event.posY.toFixed(1)}`
    const location = getNearestLocation(map, event.posX, event.posY)

    return new EmbedBuilder()
        .setColor(0xF97316)
        .setTitle(`<:icon_disconnect_white:1511171075801616434> · DISCONNECTED · ${event.timestamp.toLocaleTimeString('fr-FR')}`)
        .setDescription(`**${event.playerName}** disconnected from the game server.`)
        .addFields(
            {
                name: '<:icon_stopwatch_white:1511143338252959764> | Session Playtime',
                value: `**${formatDuration(sessionSeconds)}**`,
            },
            {
                name: '<:icon_watch_white:1511143337334280202> | Total Playtime',
                value: `**${formatDuration(totalSecondsOnline)}**`,
            },
            {
                name: '<:icon_pin_white:1511090740296548392> | Location',
                value: `[**${location}**](${izurvive})`,
            },
        )
        .setFooter({ text: 'Monarch' })
        .setTimestamp()
}