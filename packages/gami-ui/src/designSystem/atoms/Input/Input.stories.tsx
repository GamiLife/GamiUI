import React from 'react'
import { Meta } from '@storybook/react'

import Input from '.'
import Icon from '../Icon'

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {},
  argTypes: {
    positionPrefix: {
      control: 'select',
      options: ['left', 'right'],
    },
    placeholder: { control: 'text' },
    prefix: {
      options: ['a', 'b'],
      mapping: {
        a: null,
        b: <Icon color="#374a54" />,
      },
      control: {
        type: 'select',
        labels: {
          a: 'withoutIcon',
          b: 'withIcon',
        },
      },
    },
  },
} as Meta

export const BasicInput = (args: any) => <Input {...args} />
BasicInput.args = {
  placeholder: 'Type your name',
  width: 'auto',
  height: 'auto',
  prefix: null,
}

export const IconInput = (args: any) => <Input {...args} />
IconInput.args = {
  placeholder: 'Type your name',
  width: 'auto',
  height: 'auto',
  prefix: <Icon name="user" />,
}
