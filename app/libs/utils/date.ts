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
export const formatDbDate = (date: string | undefined | null) => {
  const formattedDate = date?.split('T')[0]
  return formattedDate
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


