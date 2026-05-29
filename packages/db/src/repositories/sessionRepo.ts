import { prisma } from '../index'
import type { Session } from '../generated/prisma/client'

export async function findOpenSession(playerId: string): Promise<Session | null> {
    return prisma.session.findFirst({
        where: { playerId, disconnectedAt: null },
    })
}

export async function findLatestOpenSession(playerId: string): Promise<Session | null> {
    return prisma.session.findFirst({
        where: { playerId, disconnectedAt: null },
        orderBy: { connectedAt: 'desc' },
    })
}

export async function createSession(playerId: string, connectedAt: Date): Promise<void> {
    await prisma.session.create({ data: { playerId, connectedAt } })
}

export async function closeSession(
    sessionId: string,
    disconnectedAt: Date,
    durationSeconds: number,
): Promise<void> {
    await prisma.session.update({
        where: { id: sessionId },
        data: { disconnectedAt, durationSeconds },
    })
}
