import { DateHelper, dateHelper, ICalendarItem } from 'core/helpers/date.helper'
import { cls } from 'core/utils/cls'
import React, { useEffect, useState } from 'react'
import * as S from './Calendar.styles'

export interface ICalendar {
  /**
   * Default Date
   */
  defaultDate?: Date
  /**
   * Handler on date selection
   */
  onDateSelected?: (date?: Date) => void
}

const Calendar = React.forwardRef(
  (
    { onDateSelected, defaultDate }: ICalendar,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const getTimeStamp = () => {
      if (!defaultDate) return 0

      const year = defaultDate.getFullYear()
      const month = defaultDate.getMonth()
      const dayNumber = defaultDate.getDate()

      const timestamp = new Date(year, month, dayNumber)
      return timestamp.getTime()
    }

    const [currentDate, setCurrentDate] = useState<Date>(
      defaultDate ?? new Date()
    )
    const [weeks, setWeeks] = useState<number>(0)
    const [calendar, setCalendar] = useState<ICalendarItem[]>([])
    const [month, setMonth] = useState<string>('')
    const [year, setYear] = useState<number>(0)

    const [daySelected, setDaySelected] = useState<number>(getTimeStamp())

    const handleChangeDateByMonth = (type: 'prev' | 'next') => {
      const currentDateCloned = new Date(currentDate.getTime())
      const currentMonth = currentDateCloned.getMonth()

      const monthOperation = currentMonth + (type === 'prev' ? -1 : +1)
      currentDateCloned.setMonth(monthOperation)

      setCurrentDate(currentDateCloned)
    }

    const formatDate = () => {
      if (daySelected <= 0) return

      const currentDateCloned = new Date(daySelected)

      return currentDateCloned
    }

    const handleCalendar = () => {
      const weekDays = dateHelper({ date: currentDate }).getWeeksByMonth()
      const { calendar } = dateHelper({
        date: currentDate,
      }).getCalendar()
      const monthName = dateHelper({ date: currentDate }).monthName
      const year = dateHelper({ date: currentDate }).year

      setWeeks(weekDays)
      setCalendar(calendar)
      setMonth(monthName)
      setYear(year)
    }

    useEffect(() => {
      handleCalendar()
    }, [])

    useEffect(() => {
      handleCalendar()
    }, [currentDate])

    useEffect(() => {
      const senderDate = formatDate()
      onDateSelected?.(senderDate)
    }, [daySelected])

    const prevMonth = () => handleChangeDateByMonth('prev')

    const nextMonth = () => handleChangeDateByMonth('next')

    const handleSelectDay = (dayId: number) => setDaySelected(dayId)

    return (
      <S.Calendar ref={ref}>
        <S.Header>
          <S.Prev
            padding="5px"
            rounded="full"
            shadow="md"
            name="arrow__left"
            onClick={prevMonth}
            color="black"
          />
          <S.Month>
            {month} {year}
          </S.Month>
          <S.Next
            padding="5px"
            rounded="full"
            shadow="md"
            name="arrow__right"
            onClick={nextMonth}
            color="black"
          />
        </S.Header>
        <S.Body>
          <S.DayHead>
            {DateHelper.indexDays.map((day: string) => (
              <S.DayItem key={day}>
                <S.DayNameSpan>{day.slice(0, 2)}</S.DayNameSpan>
              </S.DayItem>
            ))}
          </S.DayHead>
          <S.DayBody $rows={weeks}>
            {calendar.map(({ id, dayNumber, today, fromMonth }) => (
              <S.DayWeekItem key={id}>
                <S.DaySpan
                  onClick={() => handleSelectDay(id)}
                  className={cls({
                    today: today,
                    month: fromMonth,
                    selected: daySelected === id,
                  })}
                >
                  {dayNumber}
                </S.DaySpan>
              </S.DayWeekItem>
            ))}
          </S.DayBody>
        </S.Body>
      </S.Calendar>
    )
  }
)

export default Calendar
