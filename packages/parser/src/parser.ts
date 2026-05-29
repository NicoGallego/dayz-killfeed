import { buildTimestamp } from "./dateUtils";
import {
    LogEvent,
    KillEvent,
    ConnectEvent,
    DisconnectEvent,
    PveDeathEvent,
} from "./types";
import { HitCorrelator } from "./hitCorrelator";

const CONNECTED_REGEX =
    /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) is connected$/;

const DISCONNECT_REGEX =
    /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) has been disconnected$/;

const KILL_REGEX =
    /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(DEAD\) \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) killed by Player "(.+?)" (?:\(DEAD\) )?\(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) with (.+?) from ([\d.]+) meters\s*$/;

const PVE_KILL_REGEX =
    /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(DEAD\) \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) killed by (.+)$/;

const BLED_OUT_REGEX =
    /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(DEAD\) \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) bled out$/;

const DIED_REGEX =
    /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" \(DEAD\) \(id=([^\s]+) pos=<([^,]+), ([^,]+), ([^>]+)>\) died\. Stats> Water: [\d.]+ Energy: [\d.]+ Bleed sources: (\d+)$/;

const HIT_REGEX =
    /^(\d{2}:\d{2}:\d{2}) \| Player "(.+?)" (?:\(DEAD\) )?\(id=([^\s]+)[^)]*\)\[HP:[^\]]+\] hit by Player "(.+?)" \(id=([^\s]+)[^)]*\) into (\w+)\(\d+\) for ([\d.]+) damage \(([^)]+)\) with (.+?) from ([\d.]+) meters/;

export function parseLogLine(
    line: string,
    logDate: string,
    correlator?: HitCorrelator,
): LogEvent | null {
    let match: RegExpMatchArray | null;

    // Hit — before KILL_REGEX to track fatal zone
    match = line.match(HIT_REGEX);
    if (match) {
        const [, , , victimId, , , bodyPart, , ammoType] = match;
        correlator?.set(victimId, { bodyPart, ammoType });
        return null;
    }

    // PvP kill
    match = line.match(KILL_REGEX);
    if (match) {
        const [
            ,
            time,
            victimName,
            victimId,
            victimPosX,
            victimPosY,
            victimPosZ,
            killerName,
            killerId,
            killerPosX,
            killerPosY,
            killerPosZ,
            weapon,
            distance,
        ] = match;

        const hitData = correlator?.consume(victimId) ?? null;
        return {
            type: "kill",
            timestamp: buildTimestamp(logDate, time),
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
            fatalHitZone: hitData?.bodyPart ?? null,
            ammoType: hitData?.ammoType ?? null,
        } as KillEvent;
    }

    // PvE kill
    match = line.match(PVE_KILL_REGEX);
    if (match) {
        const [, time, playerName, playerId, posX, posY, posZ, killedBy] = match;
        const isExplosion = !killedBy.startsWith("Zmb") && !killedBy.startsWith("Animal");
        return {
            type: "pve_death",
            timestamp: buildTimestamp(logDate, time),
            playerName,
            playerId,
            posX: parseFloat(posX),
            posY: parseFloat(posY),
            posZ: parseFloat(posZ),
            bleedSources: 0,
            killedBy: isExplosion ? killedBy : undefined,
        } as PveDeathEvent;
    }

    // Bled out
    match = line.match(BLED_OUT_REGEX);
    if (match) {
        const [, time, playerName, playerId, posX, posY, posZ] = match;
        return {
            type: "pve_death",
            timestamp: buildTimestamp(logDate, time),
            playerName,
            playerId,
            posX: parseFloat(posX),
            posY: parseFloat(posY),
            posZ: parseFloat(posZ),
            bleedSources: 0,
        } as PveDeathEvent;
    }

    // Died
    match = line.match(DIED_REGEX);
    if (match) {
        const [, time, playerName, playerId, posX, posY, posZ, bleedSources] = match;
        return {
            type: "pve_death",
            timestamp: buildTimestamp(logDate, time),
            playerName,
            playerId,
            posX: parseFloat(posX),
            posY: parseFloat(posY),
            posZ: parseFloat(posZ),
            bleedSources: parseInt(bleedSources ?? "0"),
        } as PveDeathEvent;
    }

    // Connect
    match = line.match(CONNECTED_REGEX);
    if (match) {
        const [, time, playerName, playerId, posX, posY, posZ] = match;
        return {
            type: "connect",
            timestamp: buildTimestamp(logDate, time),
            playerName,
            playerId,
            posX: parseFloat(posX),
            posY: parseFloat(posY),
            posZ: parseFloat(posZ),
        } as ConnectEvent;
    }

    // Disconnect
    match = line.match(DISCONNECT_REGEX);
    if (match) {
        const [, time, playerName, playerId, posX, posY, posZ] = match;
        return {
            type: "disconnect",
            timestamp: buildTimestamp(logDate, time),
            playerName,
            playerId,
            posX: parseFloat(posX),
            posY: parseFloat(posY),
            posZ: parseFloat(posZ),
        } as DisconnectEvent;
    }

    return null;
}