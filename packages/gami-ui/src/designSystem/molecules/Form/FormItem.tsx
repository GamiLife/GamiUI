import React from 'react'

import Button from 'designSystem/atoms/Button'

import Number from 'designSystem/atoms/Number'
import Input from 'designSystem/atoms/Input'
import Password from 'designSystem/atoms/Password'
import Radio from 'designSystem/atoms/Radio'
import Select from 'designSystem/atoms/Select'
import TextArea from 'designSystem/atoms/TextArea'

import useFormStore from 'hooks/store/useFormStore'
import useCloneElement from 'hooks/useCloneElements'

import * as S from './Form.styles'

import FormError from './FormError'
import { cls } from 'core/utils/cls'
import File from 'designSystem/atoms/File'
import ColorPicker from 'designSystem/atoms/ColorPicker'
import DatePicker from 'designSystem/atoms/DatePicker'

export type TRulesType = 'required' | 'email' | 'maxNumber' | 'minNumber'

export interface IRules {
  type: TRulesType
  message: string
  value?: number
}

export interface IFormItem {
  label?: string
  name: string
  children: React.ReactNode
  rules?: IRules[]
}

const FormItem = ({ label = '', name, children }: IFormItem) => {
  const { formValue, setFormValues } = useFormStore()

  const handleChangeValue = (value: any): void => setFormValues({ name, value })

  const { yupErrors } = useFormStore()
  const { validatorChildrenLength, childrenWithProps } = useCloneElement({
    children,
    propsElement: {
      name,
      value: formValue?.[name] ?? '',
      onChangeFormItem: handleChangeValue,
    },
    maxChildrenNumber: 1,
    advancedOptions: {
      propsOfElement: [{ props: {}, childrenConditionTypes: [Button] }],
    },
    childrenTypes: [
      Input,
      Password,
      TextArea,
      Select,
      Radio,
      Number,
      Button,
      File,
      ColorPicker,
      DatePicker,
    ],
  })

  if (validatorChildrenLength(childrenWithProps)) {
    return null
  }

  const hasErrors = yupErrors?.[name]

  return (
    <S.FormItem
      className={cls('test', {
        error: !!hasErrors,
      })}
    >
      {label != '' && (
        <S.FormLabel
          fontWeight="semibold"
          text={label}
          width="auto"
          height="auto"
          rounded="none"
        />
      )}
      {childrenWithProps}
      <FormError name={name} />
    </S.FormItem>
  )
}

export default FormItem
