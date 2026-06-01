import type { Player, Session } from '@killfeed/db'

export interface KillerStatsResult {
    killsPvp: number
    kdRatio: number
    currentKillstreak: number
    bestKillstreak: number
    longestKillDistance: number
    streakText: string
}

export interface VictimStatsResult {
    deathsPvp: number
    kdRatio: number
    lastDeathAt: Date
}

export interface TimeAliveResult {
    seconds: number
    text: string
}

export function computeKillerStats(killer: Player, killDistance: number): KillerStatsResult {
    const newStreak = killer.currentKillstreak + 1
    const newKills = killer.killsPvp + 1
    return {
        killsPvp: newKills,
        kdRatio: newKills / Math.max(killer.deathsPvp, 1),
        currentKillstreak: newStreak,
        bestKillstreak: Math.max(killer.bestKillstreak, newStreak),
        longestKillDistance: Math.max(killer.longestKillDistance, killDistance),
        streakText: `${newStreak}x Killstreak`,
    }
}

export function computeVictimStats(victim: Player, killedAt: Date): VictimStatsResult {
    const newDeaths = victim.deathsPvp + 1
    return {
        deathsPvp: newDeaths,
        kdRatio: victim.killsPvp / Math.max(newDeaths, 1),
        lastDeathAt: killedAt,
    }
}

export function computeTimeAlive(
    victim: Player,
    killTimestamp: Date,
    session: Session | null,
): TimeAliveResult {
    let seconds = 0

    if (victim.isOnline && victim.lastDeathAt) {
        seconds = Math.floor((killTimestamp.getTime() - victim.lastDeathAt.getTime()) / 1000)
    } else if (victim.isOnline && session) {
        seconds = Math.floor((killTimestamp.getTime() - session.connectedAt.getTime()) / 1000)
    }

    const text = seconds > 0
        ? `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m ${seconds % 60}s`
        : 'Unknown'

    return { seconds, text }
}