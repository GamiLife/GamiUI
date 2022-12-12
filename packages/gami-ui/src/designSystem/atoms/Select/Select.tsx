import React from 'react'
import { OptionTypeBase } from 'react-select'

import { IInput } from '../Input/Input'
import * as S from './Select.styles'

export interface IOptions {
  value: string
  label: string
}

type TSelectValue = OptionTypeBase[] | OptionTypeBase | null | undefined

export interface ISelect extends Omit<IInput, 'value'> {
  /**
   * Children Element
   */
  options?: IOptions[]
  /**
   * Multiple Option
   */
  isMultiple?: boolean
  /**
   * isClearable Option
   */
  isClearable?: boolean
  /**
   * isClearable Option
   */
  value?: TSelectValue
}

const Select = ({
  options,
  onChangeFormItem,
  placeholder,
  value,
  isMultiple = false,
  isClearable = false,
}: ISelect) => {
  return (
    <S.ReactSelect
      isClearable={isClearable}
      isMulti={isMultiple}
      classNamePrefix="Select"
      placeholder={placeholder}
      value={value}
      onChange={onChangeFormItem}
      options={options}
    />
  )
}

export default Select
