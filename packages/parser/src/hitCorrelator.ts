export interface HitData {
    bodyPart: string
    ammoType: string
}

export class HitCorrelator {
    private store = new Map<string, HitData>()

    set(victimId: string, data: HitData): void {
        this.store.set(victimId, data)
    }

    consume(victimId: string): HitData | null {
        const data = this.store.get(victimId) ?? null
        this.store.delete(victimId)
        return data
    }

    clear(): void {
        this.store.clear()
    }
}
