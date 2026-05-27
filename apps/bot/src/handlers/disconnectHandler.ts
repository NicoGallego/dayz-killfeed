import { prisma } from '@killfeed/db'
import { DisconnectEvent } from '@killfeed/parser'

export async function handleDisconnect(event: DisconnectEvent): Promise<void> {
    console.log(`[DISCONNECT] ${event.timestamp} – ${event.playerName}`)

    const player = await prisma.player.findUnique({
        where: { nitradoId: event.playerId },
    })

    if (!player) return

    // Trouver la session ouverte la plus récente
    const openSession = await prisma.session.findFirst({
        where: {
            playerId: player.id,
            disconnectedAt: null,
        },
        orderBy: { connectedAt: 'desc' },
    })

    if (!openSession) return

    const disconnectedAt = event.timestamp
    const durationSeconds = Math.floor(
        (disconnectedAt.getTime() - openSession.connectedAt.getTime()) / 1000
    )

    // Fermer la session et calculer la durée
    await prisma.session.update({
        where: { id: openSession.id },
        data: {
            disconnectedAt,
            durationSeconds,
        },
    })

    // Mettre à jour le temps total en ligne du joueur
    await prisma.player.update({
        where: { id: player.id },
        data: {
            totalSecondsOnline: player.totalSecondsOnline + durationSeconds,
        },
    })
}