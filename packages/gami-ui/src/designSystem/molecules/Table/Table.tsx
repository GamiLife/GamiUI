import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

import * as S from './Table.styles'
import { cls } from 'core/utils/cls'
import { Header } from './Header'
import { Body } from './Body'
import { Column } from './Column'
import { Row } from './Row'
import { Cell } from './Cell'

export interface IColumn {
  title: string
  dataIndex: string
  render?: (props: string) => React.ReactNode
}

export interface ITable extends IGeneralProps {
  children: React.ReactNode
}

const Table = ({ children, ...genericsProps }: ITable) => {
  return (
    <S.TableContainer
      className={cls(genericsProps?.className ?? '')}
      {...getGenericPropStyles(genericsProps)}
    >
      <S.Table>{children}</S.Table>
    </S.TableContainer>
  )
}

Table.displayName = 'Table'
Table.Header = Header
Table.Body = Body
Table.Column = Column
Table.Row = Row
Table.Cell = Cell

export default Table
