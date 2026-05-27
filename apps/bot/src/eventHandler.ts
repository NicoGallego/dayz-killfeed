import { LogEvent } from '@killfeed/parser'
import { handleKill } from './handlers/killHandler'

export async function handleEvent(event: LogEvent): Promise<void> {
    switch (event.type) {
        case 'kill':
            await handleKill(event)
            break
        case 'suicide':
            // TODO
            break
        case 'connect':
            // TODO
            break
        case 'disconnect':
            // TODO
            break
        case 'pve_death':
            // TODO
            break
        case 'hit':
            break
    }
}