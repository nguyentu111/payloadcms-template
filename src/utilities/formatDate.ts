import { format, parseISO } from 'date-fns'
export const formattedDateFromString = (dateString: string) =>
  format(parseISO(dateString), 'dd/MM/yyyy')
