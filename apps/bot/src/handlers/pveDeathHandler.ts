import { playerRepo, configRepo } from '@killfeed/db'
import { PveDeathEvent } from '@killfeed/parser'
import { sendKillfeedEmbed } from '../discord'
import { buildExplosionEmbed } from '../embeds/explosionEmbed'

export async function handlePveDeath(event: PveDeathEvent): Promise<void> {
    console.log(`[PVE DEATH] ${event.playerName}${event.killedBy ? ` par ${event.killedBy}` : ''}`)

    const player = await playerRepo.upsertPlayer(event.playerId, event.playerName)

    if (event.killedBy) {
        // Mort par explosif — compte comme mort PvP
        const newDeaths = player.deathsPvp + 1
        const victimKd = player.killsPvp / Math.max(newDeaths, 1)

        await Promise.all([
            playerRepo.updateVictimStats(player.id, {
                deathsPvp: newDeaths,
                kdRatio: victimKd,
                lastDeathAt: event.timestamp,
            }),
            playerRepo.resetLifeStats(player.id, event.timestamp),
        ])

        const map = await configRepo.getConfig('map')

        const embed = buildExplosionEmbed({
            event,
            victimDeaths: newDeaths,
            victimKd,
            map: map ?? 'livonia',
        })

        await sendKillfeedEmbed(embed)
    } else {
        // Mort environnement — compte comme mort PvE
        await Promise.all([
            playerRepo.updatePveDeath(player.id, player.deathsPve + 1, event.timestamp),
            playerRepo.resetLifeStats(player.id, event.timestamp),
        ])
    }
}