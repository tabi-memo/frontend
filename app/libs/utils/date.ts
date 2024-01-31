import { toDate, utcToZonedTime, format } from 'date-fns-tz'

/*
 * NOTE: This timezone is used for the entire application.
 * All form inputs for date or date time should have offset of +09:00 e.g."2024-01-01T00:00:00+09:00", which is Tokyo timezone.
 * See "formatToISODate" function.
 */
const TIMEZONE = 'Asia/Tokyo'

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

export const getOneNextDate = (isoString: string) => {
  const dateObj = getDateObj(isoString)
  dateObj.setDate(dateObj.getDate() + 1)
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

/**
 * @param date - ISO date string
 * @param type - 'dayMonthYear' | 'dayMonth'
 * @returns - Formatted date string for 'dayMonthYear' e.g. '2023/01/01'
 * @returns - Formatted date string for 'dayMonth' e.g. '01/01'
 */
export const formatDateToSlash = (
  date: string | undefined | null,
  type: 'dayMonthYear' | 'dayMonth'
) => {
  if (!date) return ''

  const dateObj = getDateObj(date)
  const formattedDateMonthYear = format(dateObj, 'yyyy/MM/dd')
  const formattedDateMonth = format(dateObj, 'MM/dd')

  if (type === 'dayMonthYear') return formattedDateMonthYear
  if (type === 'dayMonth') return formattedDateMonth
}

/**
 * @param date  - ISO date string
 * @returns - Formatted date string e.g. '2023/01/01 10:00'
 */
export const formatToDateTime = (date: string | null | undefined) => {
  if (!date) return ''

  const dateObj = getDateObj(date)
  const formattedDate = format(dateObj, 'yyyy/MM/dd HH:mm')
  return formattedDate
}

/**
 * @param date - ISO date string
 * @returns - Formatted time string e.g. '12:00'
 */
export const extractTimeFromDate = (date: string | undefined | null) => {
  if (!date) return ''

  const dateObj = getDateObj(date)
  const formattedTime = format(dateObj, 'HH:mm')
  return formattedTime
}

// TODO
/**
 * @param date  - ISO date string
 * @returns - Formatted date string e.g. '2023-01-01'
 */
export const formatDbTimeToDate = (date: string | null | undefined) => {
  if (!date) return ''

  const dateObj = getDateObj(date)
  const formattedDate = format(dateObj, 'yyyy-MM-dd')
  return formattedDate
}
