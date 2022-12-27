import React from 'react'
import { Meta } from '@storybook/react'

import File from '.'

export default {
  title: 'Atoms/File',
  component: File,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <File {...args} />
Basic.args = {}
