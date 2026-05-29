import { PrismaClient } from './generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export * from './generated/prisma/client'

export * as playerRepo from './repositories/playerRepo'
export * as sessionRepo from './repositories/sessionRepo'
export * as killEventRepo from './repositories/killEventRepo'
export * as configRepo from './repositories/configRepo'
export type { KillerStats, VictimStats } from './repositories/playerRepo'
export type { CreateKillEventInput } from './repositories/killEventRepo'