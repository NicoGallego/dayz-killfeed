import livonia from './livonia.json'

const MAPS: Record<string, { name: string, x: number, z: number }[]> = {
    livonia,
}

export function getNearestLocation(map: string, x: number, z: number): string {
    const pois = MAPS[map]
    if (!pois || pois.length === 0) return `${x.toFixed(0)}, ${z.toFixed(0)}`

    let nearest = pois[0]
    let minDist = Infinity

    for (const poi of pois) {
        const dist = Math.sqrt(Math.pow(poi.x - x, 2) + Math.pow(poi.z - z, 2))
        if (dist < minDist) {
            minDist = dist
            nearest = poi
        }
    }

    return `Near ${nearest.name}`
}