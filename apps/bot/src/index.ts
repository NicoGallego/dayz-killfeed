import dotenv from 'dotenv'
dotenv.config()
import './discord'
import { startPoller } from './poller'
import { enqueueEvent } from './queue'
import { startLeaderboardCron, sendLeaderboardNow } from './crons/leaderboardCron'

console.log('[Bot] Démarrage...')

startPoller(enqueueEvent)
startLeaderboardCron()
sendLeaderboardNow()