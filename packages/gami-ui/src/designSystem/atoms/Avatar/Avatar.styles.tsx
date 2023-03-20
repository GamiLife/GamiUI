import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Row from 'designSystem/layouts/Row'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { flex } from 'styles/mixins/flex'
import { mixinFontWeight } from 'styles/mixins/fonts'
import { hover, zoom } from 'styles/mixins/transition'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'
import { validProp } from 'styles/utilities/validatorsCss'

interface IAvatarS {
  $borderColor?: string
  $background?: string
  $textColor?: string
  theme?: ICustomTheme
}

export const Avatar = WithDesignStyledComponent(
  styled.div<IAvatarS>(
    (props) => ({
      width: props.theme.tokens.sizes.components.avatar.md,
      height: props.theme.tokens.sizes.components.avatar.md,
      background: props.$background,
      overflow: 'hidden',
    }),
    ({ $textColor, $borderColor }) => css`
      ${validProp('color', $textColor)};
      ${validProp('border-color', `1px solid ${$borderColor}`, !!$borderColor)};
      ${flex({ justifyContent: 'center', alignItems: 'center' })};
      ${zoom({ time: 0.2, scale: 0.8 })}
      ${hover}
    `
    /*{
      variants: {
        zoom: {
          inside: zoom({ time: 0.2, scale: 0.8 }),
          outside: zoom({ time: 0.2, scale: 1.2 })
        }
      }
    }*/
  ),
  'avatar'
)

export const AvatarGroup = styled(Row)`
  ${Avatar} {
    margin-left: -5px;
  }
`

export const Count = styled(Row)<Pick<IAvatarS, 'theme'>>(
  {
    width: '30px',
    height: '100%',
    marginLeft: '0.4rem',
  },
  ({ theme }) => css`
    ${mixinFontWeight(theme, 'bold')}
  `
)
