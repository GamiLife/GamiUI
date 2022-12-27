import Container from 'designSystem/layouts/Container'
import Input from 'designSystem/atoms/Input'
import * as S from './DatePicker.styles'

import React, { useState, useRef } from 'react'
import Calendar from '../Calendar'
import { usePickerTooltip } from 'hooks/usePickerTooltip'
import { cls } from 'core/utils/cls'

export interface IDatePicker {
  /**
   * Prop Of DatePicker
   */
  defaultDate?: Date
}

const DatePicker = ({ defaultDate }: IDatePicker) => {
  const tooltipRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const inputRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>

  usePickerTooltip({ tooltipRef, inputRef })

  const [dateSelected, setDateSelected] = useState<Date | undefined>()
  const [isVisible, setIsVisible] = useState(false)

  const handleDateSelected = (date?: Date) => {
    setDateSelected(date)
  }

  const value = dateSelected ? dateSelected.toLocaleString() : ''

  const handleClick = () => setIsVisible(!isVisible)

  return (
    <Container>
      <S.PickerCalendar
        ref={tooltipRef}
        className={cls({
          hide: !isVisible,
        })}
      >
        <Calendar
          defaultDate={defaultDate}
          onDateSelected={handleDateSelected}
        />
      </S.PickerCalendar>

      <div ref={inputRef}>
        <Input readOnly value={value} onClick={handleClick} />
      </div>
    </Container>
  )
}

export default DatePicker
