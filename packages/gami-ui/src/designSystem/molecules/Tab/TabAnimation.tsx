import React from 'react'
import * as S from './Tab.styles'

export interface ITabAnimation {
  left: string
  width?: string
}

export const TabAnimation = ({ left, width = '33px' }: ITabAnimation) => {
  return <S.TabAnimation $left={left} $width={width} />
}
