import { zonedTimeToUtc, toDate, utcToZonedTime, format } from 'date-fns-tz'

const TIMEZONE = 'Asia/Tokyo'

/**
 * @param date - ISO date string e.g. '2023-01-01'
 * @param type - 'dayMonthYear' | 'dayMonth'
 * @returns - Formatted date string for 'dayMonthYear' e.g. '2023/01/01'
 * @returns - Formatted date string for 'dayMonth' e.g. '01/01'
 */
export const formatDateToSlash = (
  date: string | undefined | null,
  type: 'dayMonthYear' | 'dayMonth'
) => {
  if (!date) return ''

  const parts = date.split('-')

  if (type === 'dayMonthYear') return `${parts[0]}/${parts[1]}/${parts[2]}`

  if (type === 'dayMonth') return `${parts[1]}/${parts[2]}`
}

/**
 * @param date - ISO date string e.g. '2021-01-01T12:00:00+00:00'
 * @returns - Formatted time string e.g. '12:00'
 */
export const extractTimeFromDate = (date: string | undefined | null) => {
  if (!date) return ''

  const parts = date.split('T')
  const hours = parts[1].split(':')[0]
  const minutes = parts[1].split(':')[1]

  return `${hours}:${minutes}`
}

/**
 * @param date  - ISO date string
 * @returns - Formatted date string e.g. '2023-01-01'
 */
export const formatDbTimeToDate = (date: string | null | undefined) => {
  if (!date) return ''
  const formattedDate = date.split('T')[0]
  return formattedDate
}

/**
 * @param date  - ISO date string
 * @returns - Formatted date string e.g. '2023-01-01 10:00'
 */
export const formatToDateTime = (date: string | null | undefined) => {
  if (!date) return ''
  const parts = date.split('T')
  const monthDay = date.split('T')[0]
  const hours = parts[1].split(':')[0]
  const minutes = parts[1].split(':')[1]

  return `${monthDay} ${hours}:${minutes}`
}

/**
 *
 * @param isoString - ISO date string
 * @returns - Date Object ex. Mon Jan 01 2024 00:00:00 GMT-0800 (Pacific Standard Time)
 */
export const getDateObj = (isoString: string) => {
  const parsedDate = toDate(isoString, { timeZone: TIMEZONE })
  const dateObj = utcToZonedTime(parsedDate, TIMEZONE)
  return dateObj
}

/**
 * @param date - Date Object
 * @returns - ISO date string with Tokyo timezone ex.2024-01-01T12:00:00+09:00
 */
export const formatToISODate = (date: Date) => {
  const isoString = format(date, "yyyy-MM-dd'T'HH:mm:ssXXX", {
    timeZone: TIMEZONE
  })
  return isoString
}
