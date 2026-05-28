import dotenv from 'dotenv'
dotenv.config()
import './discord'
import { startPoller } from './poller'
import { enqueueEvent } from './queue'

console.log('[Bot] Démarrage...')

startPoller(enqueueEvent)