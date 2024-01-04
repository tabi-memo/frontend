import { format, parseISO } from 'date-fns'

// TODO Might need to fix to show correct date and time not depending on Locale
/**
 * @param date - ISO date string
 * @returns - Formatted date string e.g. 'Jan 1, 2023'
 */
export const formatDateToDayMonthYear = (date: string | undefined | null) => {
  if (!date) return ''
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'MMM d, yyyy')
  return formattedDate
}

// TODO Might need to fix to show correct date and time not depending on Locale
/**
 * @param date - ISO date string
 * @returns - Formatted date string e.g. 'Jan 1'
 */
export const formatDateToDayMonth = (date: string | undefined | null) => {
  if (!date) return ''
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'MMM d')
  return formattedDate
}

/**
 * @param date - ISO date string
 * @returns - Formatted date string e.g. 'January 1, Sat'
 */
export const formatDateToDayMonthWeek = (date: string | undefined | null) => {
  if (!date) return ''
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'MMMM d, eee')
  return formattedDate
}

// TODO Might need to fix to show correct date and time not depending on Locale
/**
 * @param date - ISO date string
 * @returns - Formatted time string e.g. '13:00'
 */
export const formatDateToTime = (date: string | undefined | null) => {
  if (!date) return ''
  const parsedDate = parseISO(date)
  const formattedTime = format(parsedDate, 'HH:mm')
  return formattedTime
}

/**
 * @param date  - ISO date string
 * @returns - Formatted date string e.g. '2023-01-01'
 */
export const formatDbDate = (date: string | undefined | null) => {
  const formattedDate = date?.split('T')[0]
  return formattedDate
}


/**
 * @param date  - ISO date string
 * @returns - Formatted date string e.g. '2023-01-01'
 */
export const formatDateToDayMonthYearTime = (date: string | undefined | null) => {
    const parsedDate = parseISO(date)
    const formattedDate = format(parsedDate, 'MMM d, yyyy HH:mm')
  return formattedDate
}
