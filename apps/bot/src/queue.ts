import { LogEvent } from '@killfeed/parser'
import { handleEvent } from './eventHandler'

const queue: LogEvent[] = []
let processing = false

async function processQueue(): Promise<void> {
    if (processing) return
    processing = true

    while (queue.length > 0) {
        const event = queue.shift()!
        try {
            await handleEvent(event)
        } catch (err) {
            console.error('[Queue] Erreur sur event:', event.type, err)
        }
    }

    processing = false
}

export function enqueueEvent(event: LogEvent): void {
    queue.push(event)
    processQueue()
}