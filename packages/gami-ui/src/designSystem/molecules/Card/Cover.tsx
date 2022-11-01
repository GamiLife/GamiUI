import * as React from 'react'
import * as S from './Card.styles'

export interface ICover {
  children: React.ReactNode
}

export const Cover = ({ children }: ICover) => <S.Cover>{children}</S.Cover>
