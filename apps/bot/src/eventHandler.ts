import {LogEvent} from '@killfeed/parser'
import {handleKill} from './handlers/killHandler'
import {handleConnect} from './handlers/connectHandler'
import {handleDisconnect} from './handlers/disconnectHandler'
import {handlePveDeath} from './handlers/pveDeathHandler'

export async function handleEvent(event: LogEvent): Promise<void> {
    switch (event.type) {
        case 'kill':
            await handleKill(event)
            break
        case 'connect':
            await handleConnect(event)
            break
        case 'disconnect':
            await handleDisconnect(event)
            break
        case 'pve_death':
            await handlePveDeath(event)
            break
        case 'hit':
            break
    }
}