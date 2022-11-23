import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import React from 'react'
import * as S from './Table.styles'

export type IRowChildren = (
  entry: [key: string, value: unknown],
  index: number
) => React.ReactNode

export interface IRow {
  item?: IDynamicObjectWithField
  children: React.ReactNode | IRowChildren
}

export const Row = ({ children, item }: IRow) => {
  if (!item) return <S.TableRow>{children}</S.TableRow>

  if (typeof children !== 'function') return null

  return (
    <S.TableRow>
      {Object.entries(item).map(children as IRowChildren)}
    </S.TableRow>
  )
}
