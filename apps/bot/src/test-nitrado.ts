import dotenv from 'dotenv'
dotenv.config()

import { fetchLogLines } from './nitrado'
import { parseLogLine } from '@killfeed/parser'

async function test() {
    console.log('Récupération des logs...')
    const lines = await fetchLogLines()
    console.log(`${lines.length} lignes récupérées`)

    let parsed = 0
    let ignored = 0

    for (const line of lines) {
        const result = parseLogLine(line)
        if (result) {
            parsed++
            console.log(JSON.stringify(result))
        } else {
            ignored++
        }
    }

    console.log(`\n✅ Parsées: ${parsed} | ❌ Ignorées: ${ignored}`)
}

test().catch(console.error)