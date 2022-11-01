import Spacer from 'designSystem/layouts/Spacer'
import * as React from 'react'
import {
  TitleContainer,
  SubtitleContainer,
} from 'styles/utilities/commonComponent'
import * as S from './Card.styles'

export interface IContent {
  title: React.ReactNode
  description: React.ReactNode
}

export const Content = ({ title, description }: IContent) => (
  <S.Content>
    <TitleContainer>{title}</TitleContainer>
    <Spacer direction="bottom" />
    <SubtitleContainer>{description}</SubtitleContainer>
  </S.Content>
)
