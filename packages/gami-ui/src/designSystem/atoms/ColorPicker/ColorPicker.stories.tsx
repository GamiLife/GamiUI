import React from 'react'
import { Meta } from '@storybook/react'

import ColorPicker from '.'

export default {
  title: 'Atoms/ColorPicker',
  component: ColorPicker,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <ColorPicker {...args} />
Basic.args = {}
