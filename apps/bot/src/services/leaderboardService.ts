import {prisma} from '@killfeed/db'

export interface LeaderboardEntry {
    rank: number
    name: string
    value: number | string
}

export interface Leaderboard {
    topKills: LeaderboardEntry[]
    topKillstreak: LeaderboardEntry[]
    topLongestKill: LeaderboardEntry[]
    topOnlineTime: LeaderboardEntry[]
}

function formatDuration(seconds: number): string {
    const d = Math.floor(seconds / 86400)
    const h = Math.floor((seconds % 86400) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    return d > 0 ? `${d}d ${h}h ${m}m` : `${h}h ${m}m`
}

export async function computeLeaderboard(): Promise<Leaderboard> {
    const [kills, killstreak, longestKill, onlineTime] = await Promise.all([
        prisma.player.findMany({
            orderBy: {killsPvp: 'desc'},
            take: 5,
            select: {name: true, killsPvp: true},
        }),
        prisma.player.findMany({
            orderBy: {bestKillstreak: 'desc'},
            take: 5,
            select: {name: true, bestKillstreak: true},
        }),
        prisma.player.findMany({
            orderBy: {longestKillDistance: 'desc'},
            take: 5,
            select: {name: true, longestKillDistance: true, longestKillWeapon: true},
        }),
        prisma.player.findMany({
            orderBy: {totalSecondsOnline: 'desc'},
            take: 5,
            select: {name: true, totalSecondsOnline: true},
        }),
    ])

    return {
        topKills: kills.map((p, i) => ({rank: i + 1, name: p.name, value: p.killsPvp})),
        topKillstreak: killstreak.map((p, i) => ({rank: i + 1, name: p.name, value: p.bestKillstreak})),
        topLongestKill: longestKill.map((p, i) => ({
            rank: i + 1,
            name: p.name,
            value: `${p.longestKillDistance.toFixed(0)}m | ${p.longestKillWeapon ?? ''}`,
        })),
        topOnlineTime: onlineTime.map((p, i) => ({
            rank: i + 1,
            name: p.name,
            value: formatDuration(p.totalSecondsOnline),
        })),
    }
}