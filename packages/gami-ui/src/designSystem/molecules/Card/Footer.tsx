import * as React from 'react'
import * as S from './Card.styles'

export interface IFooter {
  children: React.ReactNode
}

export const Footer = ({ children }: IFooter) => <S.Footer>{children}</S.Footer>
