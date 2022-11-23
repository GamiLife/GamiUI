import { cls } from 'core/utils/cls'
import React from 'react'
import * as S from './Table.styles'

export interface IColumn {
  children: React.ReactNode
  as?: 'th' | 'td'
}

export const Column = ({ children, as = 'td' }: IColumn) => {
  return (
    <S.TableColumn
      as={as}
      className={cls({
        header: as === 'th',
      })}
    >
      {children}
    </S.TableColumn>
  )
}
