import React from 'react'
import { Meta } from '@storybook/react'

import Tooltip from '.'
import Icon from '../Icon'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {},
} as Meta

export const TooltipWithMessage = (args: any) => <Tooltip {...args} />
TooltipWithMessage.args = {
  message: 'Hello World!',
  icon: <Icon name="close" />,
}

export const TooltipWithoutMessage = (args: any) => <Tooltip {...args} />
TooltipWithoutMessage.args = {
  message: 'Message 2',
  icon: <Icon name="bold" />,
}
