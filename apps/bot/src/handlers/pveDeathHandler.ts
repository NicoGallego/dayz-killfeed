import { playerRepo } from '@killfeed/db'
import { PveDeathEvent } from '@killfeed/parser'

export async function handlePveDeath(event: PveDeathEvent): Promise<void> {
    console.log(`[PVE DEATH] ${event.playerName}${event.killedBy ? ` par ${event.killedBy}` : ''}`)

    const player = await playerRepo.upsertPlayer(event.playerId, event.playerName)
    await playerRepo.updatePveDeath(player.id, player.deathsPve + 1, event.timestamp)
}
