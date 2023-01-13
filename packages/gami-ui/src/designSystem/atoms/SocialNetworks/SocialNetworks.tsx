import React from 'react'
import { Whatsapp } from './apps/Whatsapp'
import * as S from './SocialNetworks.styles'

export interface ISocialNetworks {
  /**
   * Prop Of SocialNetworks
   */
  children?: React.ReactNode
}

const SocialNetworks = ({ children }: ISocialNetworks) => {
  return <S.SocialNetworks>{children}</S.SocialNetworks>
}

SocialNetworks.Whatsapp = Whatsapp

export default SocialNetworks
