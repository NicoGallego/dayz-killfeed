import { LogEvent, KillEvent, SuicideEvent, ConnectEvent, DisconnectEvent, HitEvent } from './types'

const CONNECTED_REGEX = /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) is connected$/
const SUICIDE_REGEX = /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(DEAD\) \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) committed suicide$/
const KILL_REGEX = /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(DEAD\) \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) killed by Player "(.+?)" \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) with (.+?) from ([\d.]+) meters$/
const HIT_REGEX = /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" (?:\(DEAD\) )?\(id=([^\s]+)[^)]*\)\[HP:[^\]]+\] hit by Player "(.+?)" \(id=([^\s]+)[^)]*\) into (\w+)\(\d+\) for ([\d.]+) damage \(([^)]+)\) with (.+?) from ([\d.]+) meters$/
const DISCONNECT_REGEX = /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) has been disconnected$/

export function parseLogLine(line: string): LogEvent | null {
    let match: RegExpMatchArray | null

    match = line.match(KILL_REGEX)
    if (match) {
        const [, time, victimName, victimId, victimPosX, victimPosY, victimPosZ, killerName, killerId, killerPosX, killerPosY, killerPosZ, weapon, distance] = match
        return {
            type: 'kill',
            time,
            victimName,
            victimId,
            victimPosX: parseFloat(victimPosX),
            victimPosY: parseFloat(victimPosY),
            victimPosZ: parseFloat(victimPosZ),
            killerName,
            killerId,
            killerPosX: parseFloat(killerPosX),
            killerPosY: parseFloat(killerPosY),
            killerPosZ: parseFloat(killerPosZ),
            weapon,
            distance: parseFloat(distance),
        } as KillEvent
    }

    match = line.match(SUICIDE_REGEX)
    if (match) {
        const [, time, playerName, playerId, posX, posY, posZ] = match
        return {
            type: 'suicide',
            time,
            playerName,
            playerId,
            posX: parseFloat(posX),
            posY: parseFloat(posY),
            posZ: parseFloat(posZ),
        } as SuicideEvent
    }

    match = line.match(CONNECTED_REGEX)
    if (match) {
        const [, time, playerName, playerId, posX, posY, posZ] = match
        return {
            type: 'connect',
            time,
            playerName,
            playerId,
            posX: parseFloat(posX),
            posY: parseFloat(posY),
            posZ: parseFloat(posZ),
        } as ConnectEvent
    }

    match = line.match(DISCONNECT_REGEX)
    if (match) {
        const [, time, playerName, playerId, posX, posY, posZ] = match
        return {
            type: 'disconnect',
            time,
            playerName,
            playerId,
            posX: parseFloat(posX),
            posY: parseFloat(posY),
            posZ: parseFloat(posZ),
        } as DisconnectEvent
    }

    match = line.match(HIT_REGEX)
    if (match) {
        const [, time, victimName, victimId, attackerName, attackerId, bodyPart, damage, ammoType, weapon, distance] = match
        return {
            type: 'hit',
            time,
            victimName,
            victimId,
            attackerName,
            attackerId,
            bodyPart,
            damage: parseFloat(damage),
            ammoType,
            weapon,
            distance: parseFloat(distance),
        } as HitEvent
    }

    return null
}