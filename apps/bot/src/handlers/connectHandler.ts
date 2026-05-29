import { playerRepo, sessionRepo } from '@killfeed/db'
import { ConnectEvent } from '@killfeed/parser'

export async function handleConnect(event: ConnectEvent): Promise<void> {
    console.log(`[CONNECT] ${event.timestamp} – ${event.playerName}`)

    const player = await playerRepo.upsertPlayerConnect(event.playerId, event.playerName)

    const openSession = await sessionRepo.findOpenSession(player.id)
    if (openSession) return

    await sessionRepo.createSession(player.id, event.timestamp)
}
