import {EmbedBuilder} from 'discord.js'
import {Leaderboard, LeaderboardEntry} from '../services/leaderboardService'

function formatEntries(entries: LeaderboardEntry[]): string {
    return entries
        .map((e) => `${e.rank}. **${e.name}** — ${e.value}`)
        .join('\n')
}

export function buildLeaderboardEmbed(leaderboard: Leaderboard): EmbedBuilder {
    const now = new Date()
    const dateStr = now.toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: 'numeric'})
    const timeStr = now.toLocaleTimeString('fr-FR')

    return new EmbedBuilder()
        .setColor(0x6366F1)
        .setTitle(`<:icon_leaderboard_white:1511172434655707196> · LEADERBOARD · ${dateStr} ${timeStr}`)
        .setDescription('All Time Leaderboard')
        .addFields(
            {
                name: '\u200B',
                value: '',
            },
            {
                name: '<:icon_killer_white:1511090743756980344> | Top Kills',
                value: [
                    formatEntries(leaderboard.topKills) || 'No data',
                    '\u200B'
                ].join('\n'),
            },
            {
                name: '<:icon_streak_white:1511171074451177582> | Top Killstreak',
                value: [formatEntries(leaderboard.topKillstreak) || 'No data',
                    '\u200B'
                ].join('\n'),
            },
            {
                name: '<:icon_pin_white:1511090740296548392> | Top Longest Kill',
                value: [formatEntries(leaderboard.topLongestKill) || 'No data',
                    '\u200B'
                ].join('\n')
            },
            {
                name: '<:icon_watch_white:1511143337334280202> | Top Online Time',
                value: [formatEntries(leaderboard.topOnlineTime) || 'No data',
                    '\u200B'
                ].join('\n')
            },
        )
        .setFooter({text: 'Monarch'})
        .setTimestamp()
}