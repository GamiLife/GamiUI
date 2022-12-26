import Container from 'designSystem/layouts/Container'
import React, { useState } from 'react'
import Calendar from '../Calendar'

export interface IDatePicker {
  /**
   * Prop Of DatePicker
   */
  prop?: any
}

const DatePicker = ({ prop }: IDatePicker) => {
  const [dateSelected, setDateSelected] = useState<Date | undefined>()

  const handleDateSelected = (date: Date) => setDateSelected(date)

  return (
    <Container>
      <Calendar onDateSelected={handleDateSelected} />
    </Container>
  )
}

export default DatePicker
