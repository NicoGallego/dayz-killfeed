import { prisma } from '../index'

export interface CreateKillEventInput {
    timestamp: Date
    killerId: string
    victimId: string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    killerStreakAtKill: number
    timeAliveSeconds?: number | null
    locationName?: string | null
}

export async function createKillEvent(data: CreateKillEventInput): Promise<void> {
    await prisma.killEvent.create({ data })
}
