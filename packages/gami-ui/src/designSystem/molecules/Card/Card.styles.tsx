import styled from '@emotion/styled'
import {
  RoundedType,
  ShadowType,
  WidthType,
  HeightType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { sizes, spacing, defaultTheme } from 'styles/tokens'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Card = InheritGlobalStylesComponent(
  styled.div<{
    $border?: RoundedType
    $shadow?: ShadowType
    $width?: WidthType
    $height?: HeightType
  }>`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: min-content;

    background-color: white;
  `
)

export const Cover = styled.div`
  width: ${sizes.width.full};
  margin: 0px;
  border-radius: 0;

  ${mixinFlexVariants({ justifyContent: 'center' })}
`

export const Content = styled.div`
  padding: ${spacing.padding.md};
`

export const Footer = styled.div`
  padding: ${spacing.padding.md};
  margin: 0px;

  width: ${sizes.width.full};
  border: 1px solid ${defaultTheme.light.neutral[800]};
`
