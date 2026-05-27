import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const SERVER_TIMEZONE = 'Europe/Paris'

let currentDate: string = ''
let lastHour: number = -1

export function initDate(logDate: string): void {
    currentDate = logDate
    lastHour = -1
}

export function buildTimestamp(logDate: string, time: string): Date {
    const [hours] = time.split(':').map(Number)

    if (!currentDate || currentDate !== logDate) {
        initDate(logDate)
    }

    if (lastHour !== -1 && hours < lastHour) {
        currentDate = dayjs(currentDate).add(1, 'day').format('YYYY-MM-DD')
    }

    lastHour = hours
    return dayjs.tz(`${currentDate}T${time}`, SERVER_TIMEZONE).toDate()
}