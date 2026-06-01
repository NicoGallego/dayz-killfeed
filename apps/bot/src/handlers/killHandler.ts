import { playerRepo, sessionRepo, killEventRepo, configRepo } from '@killfeed/db'
import { KillEvent } from '@killfeed/parser'
import { sendKillfeedEmbed } from '../discord'
import { buildKillEmbed } from '../embeds/killEmbed'
import { computeKillerStats, computeVictimStats, computeTimeAlive } from '../services/killStatsService'

export async function handleKill(event: KillEvent): Promise<void> {
    console.log(`[KILL] ${event.killerName} a tué ${event.victimName} avec ${event.weapon} à ${event.distance}m`)

    const [killer, victim, map] = await Promise.all([
        playerRepo.upsertPlayer(event.killerId, event.killerName),
        playerRepo.upsertPlayer(event.victimId, event.victimName),
        configRepo.getConfig('map'),
    ])

    const session = victim.isOnline && !victim.lastDeathAt
        ? await sessionRepo.findLatestOpenSession(victim.id)
        : null

    const killerStats = computeKillerStats(killer, event.distance)
    const victimStats = computeVictimStats(victim, event.timestamp)
    const { seconds: timeAliveSeconds, text: timeAliveText } = computeTimeAlive(victim, event.timestamp, session)

    await Promise.all([
        playerRepo.updateKillerStats(killer.id, {
            killsPvp: killerStats.killsPvp,
            kdRatio: killerStats.kdRatio,
            currentKillstreak: killerStats.currentKillstreak,
            bestKillstreak: killerStats.bestKillstreak,
            longestKillDistance: killerStats.longestKillDistance,
        }),
        playerRepo.updateVictimStats(victim.id, {
            deathsPvp: victimStats.deathsPvp,
            kdRatio: victimStats.kdRatio,
            lastDeathAt: victimStats.lastDeathAt,
        }),
        killEventRepo.createKillEvent({
            timestamp: event.timestamp,
            killerId: killer.id,
            victimId: victim.id,
            weapon: event.weapon,
            ammoType: event.ammoType,
            distance: event.distance,
            fatalHitZone: event.fatalHitZone,
            killedPosX: event.victimPosX,
            killedPosY: event.victimPosY,
            killedPosZ: event.victimPosZ,
            killerPosX: event.killerPosX,
            killerPosY: event.killerPosY,
            killerPosZ: event.killerPosZ,
            killerStreakAtKill: killerStats.currentKillstreak,
            timeAliveSeconds: timeAliveSeconds > 0 ? timeAliveSeconds : null,
        }),
    ])

    const embed = buildKillEmbed({
        event,
        killerKills: killerStats.killsPvp,
        killerKd: killerStats.kdRatio,
        streakText: killerStats.streakText,
        victimDeaths: victimStats.deathsPvp,
        victimKd: victimStats.kdRatio,
        timeAliveText,
        map: map ?? 'livonia',
    })

    await sendKillfeedEmbed(embed)
}