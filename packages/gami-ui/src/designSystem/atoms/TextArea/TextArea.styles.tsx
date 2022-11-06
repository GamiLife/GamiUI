import styled from '@emotion/styled'
import {
  RoundedType,
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { mixinInput } from 'styles/mixins/input'
import { spacing } from 'styles/tokens'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const TextArea = InheritGlobalStylesComponent(
  styled.textarea<{
    $border?: RoundedType
    $shadow?: ShadowType
    $width?: WidthType
    $height?: HeightType
    $textAlign?: TextAlignType
    $fontWeight?: FontWeightType
  }>`
    height: 69px;
    min-height: 75px;
    max-height: 225px;

    margin: ${spacing.margin.none};
    padding: ${spacing.padding.md};

    ${mixinInput('light')};
  `
)
