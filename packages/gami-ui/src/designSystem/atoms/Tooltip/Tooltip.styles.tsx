import styled from '@emotion/styled'
import Container from 'designSystem/layouts/Container'
import Title from '../Title'

export const Tooltip = styled(Container)<{$color: string}>`
  background-color: ${({$color})=> $color};
`

export const Text = styled(Title)`
  padding: 1rem;
`

export const IconContainer = styled.span`
  padding: 1rem;
`
