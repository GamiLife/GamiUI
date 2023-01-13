import React from 'react'
import { Meta } from '@storybook/react'

import SocialNetworks from '.'

export default {
  title: 'Atoms/SocialNetworks',
  component: SocialNetworks,
  args: {},
  argTypes: {},
} as Meta

export const Whatsapp = (args: any) => <SocialNetworks.Whatsapp {...args} />
Whatsapp.args = {
  message: 'Hi man!',
  phone: '917586966',
}
