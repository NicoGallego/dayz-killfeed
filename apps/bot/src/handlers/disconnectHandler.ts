import { playerRepo, sessionRepo } from '@killfeed/db'
import { DisconnectEvent } from '@killfeed/parser'

export async function handleDisconnect(event: DisconnectEvent): Promise<void> {
    console.log(`[DISCONNECT] ${event.timestamp} – ${event.playerName}`)

    const player = await playerRepo.findByNitradoId(event.playerId)
    if (!player) return

    const openSession = await sessionRepo.findLatestOpenSession(player.id)
    if (!openSession) return

    const durationSeconds = Math.floor(
        (event.timestamp.getTime() - openSession.connectedAt.getTime()) / 1000
    )

    await sessionRepo.closeSession(openSession.id, event.timestamp, durationSeconds)
    await playerRepo.updateDisconnect(player.id, durationSeconds)
}
