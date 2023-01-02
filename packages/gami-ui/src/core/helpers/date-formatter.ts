const dayTypes = ['d' as const, 'dd' as const]
export type TDay = typeof dayTypes[number]

const monthTypes = ['M' as const, 'MM' as const]
export type TMonth = typeof monthTypes[number]

const yearTypes = ['y' as const, 'yy' as const]
export type TYear = typeof yearTypes[number]

export type THour = 'h' | 'hh'
export type TMinute = 'm' | 'mm'
export type TSecond = 's' | 'ss'
export type TMode = 'a' | 'A'

export type TEmpty = ''

export type TDateFormatWithSlashOrderOne = `${TDay}/${TMonth}/${TYear}`
export type TDateFormatWithSlashOrderTwo = `${TMonth}/${TDay}/${TYear}`
export type TDateFormatWithSlashOrderThree = `${TYear}/${TMonth}/${TDay}`

export type TDateFormatWithLineOrderOne = `${TDay}-${TMonth}-${TYear}`
export type TDateFormatWithLineOrderTwo = `${TMonth}-${TDay}-${TYear}`
export type TDateFormatWithLineOrderThree = `${TYear}-${TMonth}-${TDay}`

export type TDateFormatWithSlash =
  | TDateFormatWithSlashOrderOne
  | TDateFormatWithSlashOrderTwo
  | TDateFormatWithSlashOrderThree
export type TDateFormatWithLine =
  | TDateFormatWithLineOrderOne
  | TDateFormatWithLineOrderTwo
  | TDateFormatWithLineOrderThree

export type TDateFormat = TDateFormatWithSlash | TDateFormatWithLine
export type TTimeFormat = `${THour}:${TMinute}${`:${TSecond}` | TEmpty}${
  | ` ${TMode}`
  | TEmpty}`
export type TDateTimeFormat = `${TDateFormat} ${TTimeFormat}`
export type TDateTimeFormatWithTZ = `${TDateFormat}T${TTimeFormat}Z`

export type TPattern =
  | TDateFormat
  | TTimeFormat
  | TDateTimeFormat
  | TDateTimeFormatWithTZ

const validationDigits = (item: string) =>
  item.length === 1 ? ('numeric' as const) : ('2-digit' as const)

export const dateFormatter = (date: Date, pattern: TPattern) => {
  const dayPattern = `${dayTypes[0]}|${dayTypes[1]}`
  const monthPattern = `${monthTypes[0]}|${monthTypes[1]}`
  const yearPattern = `${yearTypes[0]}|${yearTypes[1]}`

  const dateFormatOrderOne = (separator: '/' | '-', pattern: TPattern) => {
    const regex = `(${dayPattern})${separator}(${monthPattern})${separator}(${yearPattern})`
    const isApply = new RegExp(regex).test(pattern)
    const [d, m, y] = pattern.split(separator)
    return { isApply, d, m, y, locale: 'en-GB' }
  }
  const dateFormatOrderTwo = (separator: '/' | '-', pattern: TPattern) => {
    const regex = `(${monthPattern})${separator}(${dayPattern})${separator}(${yearPattern})`
    const isApply = new RegExp(regex).test(pattern)
    const [d, m, y] = pattern.split(separator)
    return { isApply, d, m, y, locale: 'en-GB' }
  }
  const dateFormatOrderThree = (separator: '/' | '-', pattern: TPattern) => {
    const regex = `(${yearPattern})${separator}(${monthPattern})${separator}(${dayPattern})`
    const isApply = new RegExp(regex).test(pattern)
    const [d, m, y] = pattern.split(separator)
    return { isApply, d, m, y, locale: 'en-GB' }
  }

  const ruleApplied = [
    dateFormatOrderOne('/', pattern),
    dateFormatOrderOne('-', pattern),
    dateFormatOrderTwo('/', pattern),
    dateFormatOrderTwo('-', pattern),
    dateFormatOrderThree('/', pattern),
    dateFormatOrderThree('-', pattern),
  ].find(({ isApply }) => isApply)

  if (!ruleApplied) return

  const { d, m, y, locale } = ruleApplied

  const dayDigit = validationDigits(d)
  const monthDigit = validationDigits(m)
  const yearDigit = validationDigits(y)

  const intlDateOptions = {
    year: yearDigit,
    month: monthDigit,
    day: dayDigit,
  }

  new Intl.DateTimeFormat(locale, intlDateOptions).format(date)
}
