import * as cron from 'node-cron'
import { fetchLogLines } from './nitrado'
import { parseLogLine, LogEvent } from '@killfeed/parser'
import { prisma } from '@killfeed/db'

const LAST_PARSED_LINE_KEY = 'lastParsedLine'

async function getLastParsedLine(): Promise<string | null> {
    const config = await prisma.config.findUnique({
        where: { key: LAST_PARSED_LINE_KEY },
    })
    return config?.value ?? null
}

async function setLastParsedLine(line: string): Promise<void> {
    await prisma.config.upsert({
        where: { key: LAST_PARSED_LINE_KEY },
        create: { key: LAST_PARSED_LINE_KEY, value: line },
        update: { value: line },
    })
}

async function poll(onEvent: (event: LogEvent) => void): Promise<void> {
    try {
        const { lines, logDate } = await fetchLogLines()

        const lastParsedLine = await getLastParsedLine()
        const lastIndex = lastParsedLine
            ? lines.findLastIndex(l => l === lastParsedLine)
            : -1

        const newLines = lines.slice(lastIndex + 1)

        if (newLines.length > 0) {
            await setLastParsedLine(newLines[newLines.length - 1])
        }

        for (const line of newLines) {
            const event = parseLogLine(line, logDate)
            if (event) onEvent(event)
        }
    } catch (err) {
        console.error('[Poller] Erreur:', err)
    }
}

export function startPoller(onEvent: (event: LogEvent) => void): void {
    console.log('[Poller] Démarrage...')
    poll(onEvent)
    cron.schedule('* * * * *', () => {
        console.log('[Poller] Cron déclenché')
        poll(onEvent)
    })
}