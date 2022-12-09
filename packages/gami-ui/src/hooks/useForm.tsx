import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import { useState } from 'react'

export type TFormValues = {
  value: IDynamicObjectWithField | null
  update: (value: TFormValues['value']) => void
  validate: () => void
  completeValidate: () => void
  updateValid: (value: boolean) => void
  isValidating: boolean
  isValid: boolean
}

export type IUseFormValues = {
  form: TFormValues
}

export const useForm = (): IUseFormValues => {
  const [isValid, setIsValid] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const [form, setForm] = useState<TFormValues['value']>(null)

  const validate = () => setIsValidating(true)

  const completeValidate = () => setIsValidating(false)

  const updateValid = (value: boolean) => setIsValid(value)

  return {
    form: {
      value: form,
      update: setForm,
      validate,
      completeValidate,
      updateValid,
      isValidating,
      isValid,
    },
  }
}
