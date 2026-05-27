import { LogEvent, KillEvent, SuicideEvent, ConnectEvent, DisconnectEvent, PveDeathEvent } from '@killfeed/parser'

export async function handleEvent(event: LogEvent): Promise<void> {
    switch (event.type) {
        case 'kill':
            await handleKill(event)
            break
        case 'suicide':
            await handleSuicide(event)
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
            // On ignore les hits pour l'instant
            break
    }
}

async function handleKill(event: KillEvent): Promise<void> {
    console.log(`[KILL] ${event.killerName} a tué ${event.victimName} avec ${event.weapon} à ${event.distance}m`)
    // TODO: écrire en DB
    // TODO: mettre à jour les stats
    // TODO: envoyer embed Discord
}

async function handleSuicide(event: SuicideEvent): Promise<void> {
    console.log(`[SUICIDE] ${event.playerName}`)
    // TODO: incrémenter deathsSuicide
}

async function handleConnect(event: ConnectEvent): Promise<void> {
    console.log(`[CONNECT] ${event.playerName}`)
    // TODO: créer une Session en DB
}

async function handleDisconnect(event: DisconnectEvent): Promise<void> {
    console.log(`[DISCONNECT] ${event.playerName}`)
    // TODO: fermer la Session en DB, calculer durationSeconds
}

async function handlePveDeath(event: PveDeathEvent): Promise<void> {
    console.log(`[PVE DEATH] ${event.playerName}${event.killedBy ? ` par ${event.killedBy}` : ''}`)
    // TODO: incrémenter deathsPve
}