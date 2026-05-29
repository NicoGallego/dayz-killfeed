import { prisma } from '../index'

export async function getConfig(key: string): Promise<string | null> {
    const config = await prisma.config.findUnique({ where: { key } })
    return config?.value ?? null
}

export async function setConfig(key: string, value: string): Promise<void> {
    await prisma.config.upsert({
        where: { key },
        create: { key, value },
        update: { value },
    })
}
