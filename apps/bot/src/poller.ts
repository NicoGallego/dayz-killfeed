import * as cron from 'node-cron'
import { fetchLogLines } from './nitrado'
import { parseLogLine, LogEvent, HitCorrelator } from '@killfeed/parser'
import { configRepo } from '@killfeed/db'

const LAST_PARSED_LINE_KEY = 'lastParsedLine'
const MAP_KEY = 'map'
const hitCorrelator = new HitCorrelator()

async function poll(onEvent: (event: LogEvent) => void): Promise<void> {
    try {
        const { lines, logDate, map } = await fetchLogLines()

        await configRepo.setConfig(MAP_KEY, map)

        const lastParsedLine = await configRepo.getConfig(LAST_PARSED_LINE_KEY)
        const lastIndex = lastParsedLine
            ? lines.findLastIndex(l => l === lastParsedLine)
            : -1

        const newLines = lines.slice(lastIndex + 1)

        if (newLines.length > 0) {
            await configRepo.setConfig(LAST_PARSED_LINE_KEY, newLines[newLines.length - 1])
        }

        for (const line of newLines) {
            const event = parseLogLine(line, logDate, hitCorrelator)
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
