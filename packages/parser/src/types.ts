export interface BaseEvent {
    type: LogEventType
    timestamp: Date
}

export interface KillEvent extends BaseEvent {
    type: 'kill'
    killerName: string
    killerId: string
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    victimName: string
    victimId: string
    victimPosX: number
    victimPosY: number
    victimPosZ: number
    weapon: string
    distance: number
}

export interface PveDeathEvent extends BaseEvent {
    type: 'pve_death'
    playerName: string
    playerId: string
    posX: number
    posY: number
    posZ: number
    bleedSources: number
    killedBy?: string  // uniquement pour les explosions
}

export interface ConnectEvent extends BaseEvent {
    type: 'connect'
    playerName: string
    playerId: string
    posX?: number
    posY?: number
    posZ?: number
}

export interface DisconnectEvent extends BaseEvent {
    type: 'disconnect'
    playerName: string
    playerId: string
    posX: number
    posY: number
    posZ: number
}

export interface HitEvent extends BaseEvent {
    type: 'hit'
    victimName: string
    victimId: string
    attackerName: string
    attackerId: string
    bodyPart: string
    damage: number
    ammoType: string
    weapon: string
    distance: number
}

export type LogEventType =
    | 'kill'
    | 'connect'
    | 'disconnect'
    | 'hit'
    | 'pve_death'

export type LogEvent =
    | KillEvent
    | ConnectEvent
    | DisconnectEvent
    | HitEvent
    | PveDeathEvent