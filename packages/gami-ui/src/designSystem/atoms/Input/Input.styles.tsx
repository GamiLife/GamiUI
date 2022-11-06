import styled from '@emotion/styled'
import {
  RoundedType,
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { mixinInput } from 'styles/mixins/input'
import { defaultTheme } from 'styles/tokens'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const InputBox = InheritGlobalStylesComponent(
  styled.div<{
    $border?: RoundedType
    $shadow?: ShadowType
    $fontWeight?: FontWeightType
    $width?: WidthType
    $height?: HeightType
    $textAlign?: TextAlignType
  }>`
    overflow: hidden;
    background: ${defaultTheme.light.neutral[800]};
    ${mixinFlexVariants({ alignItems: 'center' })}
    max-width: 300px;

    input[type='password'] {
      font-family: system-ui !important;
    }

    &.positionPrefixRight {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: 0 1rem 0 0;
    }

    &.positionPrefixLeft {
      flex-direction: row;
      padding: 0 0 0 1rem;
    }
  `
)

export const Input = styled.input`
  ${mixinInput('light')}
`
