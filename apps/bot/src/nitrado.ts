import axios from 'axios'
import dayjs from 'dayjs'
import { config } from './config'

const NITRADO_API = 'https://api.nitrado.net'

async function getServiceId(): Promise<number> {
    const response = await axios.get(`${NITRADO_API}/services`, {
        headers: { Authorization: `Bearer ${config.nitrado.token}` },
    })
    const services = response.data.data.services
    const dayzService = services.find((s: any) =>
        s.details?.folder_short?.includes('dayz')
    )
    if (!dayzService) throw new Error('Aucun serveur DayZ trouvé')
    return dayzService.id
}

export async function fetchLogLines(): Promise<{ lines: string[], fileName: string, logDate: string }> {
    const serviceId = await getServiceId()

    const gsResponse = await axios.get(
        `${NITRADO_API}/services/${serviceId}/gameservers`,
        {
            headers: { Authorization: `Bearer ${config.nitrado.token}` },
        }
    )

    const gameServer = gsResponse.data.data.gameserver
    const basePath: string = gameServer.game_specific.path
    const logFiles: string[] = gameServer.game_specific.log_files
    const latestAdm = logFiles.find((f) => f.endsWith('.ADM'))
    if (!latestAdm) throw new Error('Aucun fichier ADM trouvé')

    const fileName = latestAdm.split('/').pop()!
    const dateMatch = fileName.match(/(\d{4}-\d{2}-\d{2})/)
    const logDate = dateMatch ? dateMatch[1] : dayjs().format('YYYY-MM-DD')
    const filePath = `${basePath}config/${fileName}`

    const tokenResponse = await axios.get(
        `${NITRADO_API}/services/${serviceId}/gameservers/file_server/download`,
        {
            params: { file: filePath },
            headers: { Authorization: `Bearer ${config.nitrado.token}` },
        }
    )

    const { url, token } = tokenResponse.data.data.token

    const fileResponse = await axios.get(url, { params: { token } })

    const raw: string = fileResponse.data
    const cleaned = raw
        .replace(/,\s*\n\s*/g, ', ')
        .replace(/\]\s*\n\s*/g, '] ')

    return {
        lines: cleaned.split('\n').filter((line: string) => line.trim() !== ''),
        fileName,
        logDate,
    }
}