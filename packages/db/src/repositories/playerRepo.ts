import { prisma } from '../index'
import type { Player } from '../generated/prisma/client'

export interface KillerStats {
    killsPvp: number
    kdRatio: number
    currentKillstreak: number
    bestKillstreak: number
    longestKillDistance: number
}

export interface VictimStats {
    deathsPvp: number
    kdRatio: number
    lastDeathAt: Date
}

export async function upsertPlayer(nitradoId: string, name: string): Promise<Player> {
    return prisma.player.upsert({
        where: { nitradoId },
        create: { nitradoId, name },
        update: { name },
    })
}

export async function upsertPlayerConnect(nitradoId: string, name: string): Promise<Player> {
    return prisma.player.upsert({
        where: { nitradoId },
        create: { nitradoId, name, isOnline: true },
        update: { name, isOnline: true },
    })
}

export async function findByNitradoId(nitradoId: string): Promise<Player | null> {
    return prisma.player.findUnique({ where: { nitradoId } })
}

export async function updateKillerStats(id: string, stats: KillerStats): Promise<void> {
    await prisma.player.update({ where: { id }, data: stats })
}

export async function updateVictimStats(id: string, stats: VictimStats): Promise<void> {
    await prisma.player.update({
        where: { id },
        data: { ...stats, currentKillstreak: 0 },
    })
}

export async function updateDisconnect(id: string, additionalSeconds: number): Promise<void> {
    await prisma.player.update({
        where: { id },
        data: {
            totalSecondsOnline: { increment: additionalSeconds },
            isOnline: false,
        },
    })
}

export async function updatePveDeath(
    id: string,
    deathsPve: number,
    lastDeathAt: Date,
): Promise<void> {
    await prisma.player.update({ where: { id }, data: { deathsPve, lastDeathAt } })
}

export async function resetLifeStats(id: string, spawnAt: Date): Promise<void> {
    await prisma.player.update({
        where: { id },
        data: {
            lastSpawnAt: spawnAt,
            accumulatedLifeSeconds: 0,
        },
    })
}

export async function accumulateLifeSeconds(id: string, seconds: number): Promise<void> {
    await prisma.player.update({
        where: { id },
        data: {
            accumulatedLifeSeconds: { increment: seconds },
            lastSpawnAt: null,
        },
    })
}