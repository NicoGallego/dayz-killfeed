import {prisma} from '@killfeed/db'
import {ConnectEvent} from '@killfeed/parser'

export async function handleConnect(event: ConnectEvent): Promise<void> {
    console.log(`[CONNECT] ${event.timestamp} – ${event.playerName}`)


    const player = await prisma.player.upsert({
        where: {nitradoId: event.playerId},
        create: {nitradoId: event.playerId, name: event.playerName},
        update: {},
    })


    const openSession = await prisma.session.findFirst({
        where: {
            playerId: player.id,
            disconnectedAt: null,
        },
    })

    if (openSession) return

    await prisma.session.create({
        data: {
            playerId: player.id,
            connectedAt: event.timestamp,
        },
    })
}