import React from 'react'
import { Row } from './Row'
import { IColumn } from './Table'
import * as S from './Table.styles'

export type IHeaderChildren = (
  column: IColumn,
  index: number
) => React.ReactNode

export interface IHeader {
  columns: IColumn[]
  children: IHeaderChildren
}

export const Header = ({ children, columns }: IHeader) => {
  return (
    <S.TableHeader>
      <Row>{columns.map(children)}</Row>
    </S.TableHeader>
  )
}
