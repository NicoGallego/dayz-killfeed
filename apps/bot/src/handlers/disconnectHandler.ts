import { playerRepo, sessionRepo, configRepo } from '@killfeed/db'
import { DisconnectEvent } from '@killfeed/parser'
import { sendConnectionEmbed } from '../discord'
import { buildDisconnectEmbed } from '../embeds/disconnectEmbed'

export async function handleDisconnect(event: DisconnectEvent): Promise<void> {
    console.log(`[DISCONNECT] ${event.timestamp} – ${event.playerName}`)

    const player = await playerRepo.findByNitradoId(event.playerId)
    if (!player) return

    const openSession = await sessionRepo.findLatestOpenSession(player.id)
    if (!openSession) return

    const durationSeconds = Math.floor(
        (event.timestamp.getTime() - openSession.connectedAt.getTime()) / 1000
    )

    if (durationSeconds < 0) {
        await sessionRepo.closeSession(openSession.id, event.timestamp, 0)
        return
    }

    await Promise.all([
        sessionRepo.closeSession(openSession.id, event.timestamp, durationSeconds),
        playerRepo.updateDisconnect(player.id, durationSeconds),
    ])

    if (player.lastSpawnAt) {
        const lifeSeconds = Math.floor(
            (event.timestamp.getTime() - player.lastSpawnAt.getTime()) / 1000
        )
        if (lifeSeconds > 0) {
            await playerRepo.accumulateLifeSeconds(player.id, lifeSeconds)
        }
    }

    const map = await configRepo.getConfig('map')

    const embed = buildDisconnectEmbed({
        event,
        sessionSeconds: durationSeconds,
        totalSecondsOnline: player.totalSecondsOnline + durationSeconds,
        map: map ?? 'livonia',
    })

    await sendConnectionEmbed(embed)
}