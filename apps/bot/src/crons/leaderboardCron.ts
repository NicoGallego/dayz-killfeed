import cron from 'node-cron'
import {computeLeaderboard} from '../services/leaderboardService'
import {buildLeaderboardEmbed} from '../embeds/leaderboardEmbed'
import {sendLeaderboardEmbed} from '../discord'

export function startLeaderboardCron(): void {
    // Toutes les 2h sur les heures paires : 0h, 2h, 4h, 6h...
    cron.schedule('0 0,2,4,6,8,10,12,14,16,18,20,22 * * *', async () => {
        console.log('[LEADERBOARD] Génération du leaderboard...')
        const leaderboard = await computeLeaderboard()
        const embed = buildLeaderboardEmbed(leaderboard)
        await sendLeaderboardEmbed(embed)
        console.log('[LEADERBOARD] Envoyé.')
    })
}

export async function sendLeaderboardNow(): Promise<void> {
    console.log('[LEADERBOARD] Envoi manuel...')
    // Attendre que le bot soit connecté
    await new Promise(resolve => setTimeout(resolve, 3000))
    try {
        const leaderboard = await computeLeaderboard()
        const embed = buildLeaderboardEmbed(leaderboard)
        await sendLeaderboardEmbed(embed)
        console.log('[LEADERBOARD] Envoyé.')
    } catch (e) {
        console.error('[LEADERBOARD] Erreur:', e)
    }
}