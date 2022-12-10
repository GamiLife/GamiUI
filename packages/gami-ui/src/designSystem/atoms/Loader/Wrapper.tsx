import { cls } from 'core/utils/cls'
import * as React from 'react'
import * as S from './Loader.styles'

export type TBehavior = 'glass' | 'none'

export interface IWrapper {
  behavior?: 'glass' | 'none'
  minHeight?: string
  isLoading: boolean
  loaderNode: React.ReactNode
  children: React.ReactNode
}

export const Wrapper = ({
  behavior = 'none',
  children,
  loaderNode,
  isLoading,
  minHeight = 'none',
}: IWrapper) => {
  const none = () => (
    <React.Fragment>
      {isLoading ? (
        <S.Wrapper $minHeight={minHeight}>{loaderNode}</S.Wrapper>
      ) : (
        children
      )}
    </React.Fragment>
  )

  const glass = () => (
    <React.Fragment>
      <S.FragmentLoader $minHeight={minHeight}>
        {children}
        {isLoading && (
          <S.Wrapper className={cls('absolute')}>{loaderNode}</S.Wrapper>
        )}
      </S.FragmentLoader>
    </React.Fragment>
  )

  const behaviors: Record<TBehavior, () => JSX.Element> = {
    none,
    glass,
  }

  return <React.Fragment>{behaviors[behavior]()}</React.Fragment>
}
