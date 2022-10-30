import context from 'context/TabProvider/context'
import useStore from 'hooks/useStore'
import React from 'react'
import { tabOptions } from './constants'
import * as S from './Tab.styles'
import { TabAnimation } from './TabAnimation'

export interface TabListProps {
  children: React.ReactNode
}

const TabList = ({ children }: TabListProps) => {
  const { tabIdSelected } = useStore({ context: context })

  const computeLeftPosition = () => {
    const currentTabIndex = tabIdSelected.index
    if ([undefined, null].includes(currentTabIndex)) return '0px'

    const tabWith = tabOptions.width
    const leftPosition = `${tabWith * currentTabIndex}px`

    return leftPosition
  }

  return (
    <S.TabList>
      {React.Children.map(children, (child: any, index: number) =>
        React.cloneElement(child, {
          ...child.props,
          index,
        })
      )}
      <TabAnimation left={computeLeftPosition()} />
    </S.TabList>
  )
}

export default TabList
