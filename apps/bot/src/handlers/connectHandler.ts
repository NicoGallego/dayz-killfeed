import { playerRepo, sessionRepo, configRepo } from '@killfeed/db'
import { ConnectEvent, getNearestLocation } from '@killfeed/parser'
import { sendConnectionEmbed } from '../discord'
import { buildConnectEmbed } from '../embeds/connectEmbed'

export async function handleConnect(event: ConnectEvent): Promise<void> {
    console.log(`[CONNECT] ${event.timestamp} – ${event.playerName}`)

    const player = await playerRepo.upsertPlayerConnect(event.playerId, event.playerName)

    const openSession = await sessionRepo.findOpenSession(player.id)

    if (openSession) {
        // Respawn — reset timer, pas d'embed
        await playerRepo.resetLifeStats(player.id, event.timestamp)
        return
    }

    // Vraie connexion — nouvelle session + embed
    const [, map] = await Promise.all([
        sessionRepo.createSession(player.id, event.timestamp),
        configRepo.getConfig('map'),
    ])

    const embed = buildConnectEmbed({
        event,
        map: map ?? 'livonia',
    })

    await sendConnectionEmbed(embed)
}