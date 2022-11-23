import React from 'react'
import { Meta } from '@storybook/react'

import Pagination from '.'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Pagination {...args} />
Basic.args = {}
