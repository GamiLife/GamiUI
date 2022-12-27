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

export const WithTooltipAbove = (args: any) => (
  <div>
    <div style={{ height: '400px', width: '300px', background: 'white' }}></div>
    <DatePicker {...args} />
  </div>
)
Basic.args = {}

export const WithDefault = (args: any) => <DatePicker {...args} />
WithDefault.args = {
  defaultDate: new Date(2022, 10, 12),
}
