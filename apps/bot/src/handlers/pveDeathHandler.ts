import { prisma } from '@killfeed/db'
import { PveDeathEvent } from '@killfeed/parser'

export async function handlePveDeath(event: PveDeathEvent): Promise<void> {
    console.log(`[PVE DEATH] ${event.playerName}${event.killedBy ? ` par ${event.killedBy}` : ''}`)

    const player = await prisma.player.upsert({
        where: { nitradoId: event.playerId },
        create: { nitradoId: event.playerId, name: event.playerName },
        update: {},
    })

    await prisma.player.update({
        where: { id: player.id },
        data: {
            deathsPve: player.deathsPve + 1,
            lastDeathAt: event.timestamp,
        },
    })
}