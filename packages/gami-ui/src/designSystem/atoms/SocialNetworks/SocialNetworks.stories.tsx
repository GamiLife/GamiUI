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

export const Instagram = (args: any) => <SocialNetworks.Instagram {...args} />
Instagram.args = {
  user: 'yei.linux',
}

export const Facebook = (args: any) => <SocialNetworks.Facebook {...args} />
Facebook.args = {
  user: 'ecz97',
}

export const Tiktok = (args: any) => <SocialNetworks.Tiktok {...args} />
Tiktok.args = {
  user: 'followchain',
}
