import { format, parseISO } from 'date-fns'

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
