import dotenv from 'dotenv'
dotenv.config()

import './discord'
import * as fs from 'fs'
import * as path from 'path'
import { parseLogLine } from '@killfeed/parser'
import { enqueueEvent, waitForQueueIdle } from './queue'

async function main() {
    // Attendre que Discord soit prêt
    await new Promise(resolve => setTimeout(resolve, 3000))

    const filePath = path.join(__dirname, 'dev-logs.ADM')
    const logDate = '2026-05-27'

    const lines = fs.readFileSync(filePath, 'utf-8')
        .split('\n')
        .filter(l => l.trim() !== '')

    for (const line of lines) {
        const event = parseLogLine(line, logDate)
        if (event) enqueueEvent(event)
    }

    await waitForQueueIdle()
    console.log('Done')
    process.exit(0)
}

main()