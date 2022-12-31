import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import File from '.'

export default {
  title: 'Atoms/File',
  component: File,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState([])

  return <File value={value} onChangeFormItem={setValue} />
}
