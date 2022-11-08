import styled from '@emotion/styled'
import {
  RoundedType,
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import Container from 'designSystem/layouts/Container'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { mixinInput } from 'styles/mixins/input'
import { defaultTheme, spacing } from 'styles/tokens'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Input = styled.input`
  padding-top: ${spacing.padding.md};
  padding-bottom: ${spacing.padding.xs};

  ${mixinInput('light')}
`

export const PrefixContainer = styled(Container)`
  margin-bottom: 5px;
`

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
    ${mixinFlexVariants({ alignItems: 'flex-end' })}
    max-width: 300px;

    input[type='password'] {
      font-family: system-ui !important;
    }

    &.positionPrefixRight {
      flex-direction: row-reverse;
      justify-content: space-between;

      input {
        margin-right: ${spacing.padding.sm};
      }
    }

    &.positionPrefixLeft {
      flex-direction: row;

      input {
        margin-left: ${spacing.padding.sm};
      }
    }
  `
)
