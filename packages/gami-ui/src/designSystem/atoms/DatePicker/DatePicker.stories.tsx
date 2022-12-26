import React from 'react'
import { Meta } from '@storybook/react'

import DatePicker from '.'

export default {
  title: 'Atoms/DatePicker',
  component: DatePicker,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <DatePicker {...args} />
Basic.args = {}
