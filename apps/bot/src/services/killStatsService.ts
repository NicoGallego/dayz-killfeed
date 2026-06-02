import type {Player, Session} from '@killfeed/db'

export interface KillerStatsResult {
    killsPvp: number
    kdRatio: number
    currentKillstreak: number
    bestKillstreak: number
    longestKillDistance: number
    longestKillWeapon: string
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

export function computeKillerStats(killer: Player, killDistance: number, weapon: string): KillerStatsResult {
    const newStreak = killer.currentKillstreak + 1
    const newKills = killer.killsPvp + 1
    const isNewRecord = killDistance > killer.longestKillDistance

    return {
        killsPvp: newKills,
        kdRatio: newKills / Math.max(killer.deathsPvp, 1),
        currentKillstreak: newStreak,
        bestKillstreak: Math.max(killer.bestKillstreak, newStreak),
        longestKillDistance: Math.max(killer.longestKillDistance, killDistance),
        longestKillWeapon: isNewRecord ? weapon : (killer.longestKillWeapon ?? weapon),
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
): TimeAliveResult {
    let seconds = victim.accumulatedLifeSeconds

    if (victim.lastSpawnAt) {
        const sincSpawn = Math.floor(
            (killTimestamp.getTime() - victim.lastSpawnAt.getTime()) / 1000
        )
        if (sincSpawn > 0) seconds += sincSpawn
    }

    const text = seconds > 0
        ? `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m ${seconds % 60}s`
        : 'Unknown'

    return {seconds, text}
}
