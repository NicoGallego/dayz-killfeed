import dotenv from 'dotenv'
dotenv.config()
import {startPoller} from './poller'
import {handleEvent} from './eventHandler'


console.log('[Bot] Démarrage...')

startPoller(handleEvent)