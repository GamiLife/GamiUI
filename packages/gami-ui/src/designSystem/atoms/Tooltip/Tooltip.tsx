import React from 'react'
import * as S from './Tooltip.styles'

export interface ITooltip {
  icon: React.ReactNode
  /**
   * Prop Of Tooltip
   */
  message: string
}

const Tooltip = ({ message, icon }: ITooltip) => {
  return (
    <S.Tooltip $color="blue">
      <S.Text level="h3">{message}</S.Text>
      <S.IconContainer>{icon}</S.IconContainer>
    </S.Tooltip>
  )
}

export default Tooltip
