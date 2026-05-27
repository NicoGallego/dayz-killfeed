import cron from 'node-cron'
import { fetchLogLines } from './nitrado'
import { parseLogLine, LogEvent } from '@killfeed/parser'

let lastLineCount = 0

async function poll(onEvent: (event: LogEvent) => void): Promise<void> {
    try {
        const lines = await fetchLogLines()
        const newLines = lines.slice(lastLineCount)
        lastLineCount = lines.length

        for (const line of newLines) {
            const event = parseLogLine(line)
            if (event) onEvent(event)
        }
    } catch (err) {
        console.error('[Poller] Erreur:', err)
    }
}

export function startPoller(onEvent: (event: LogEvent) => void): void {
    console.log('[Poller] Démarrage...')
    poll(onEvent)
    cron.schedule('*/2 * * * *', () => poll(onEvent))
}