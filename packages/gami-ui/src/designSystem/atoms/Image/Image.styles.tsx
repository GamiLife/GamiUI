import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'
import { IImagePropStyles } from './Image'

const imagePropsStyles = ({
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
}: IImagePropStyles) => css`
  width: ${width};
  height: ${height};
  max-width: ${maxWidth};
  min-width: ${minWidth};
  max-height: ${maxHeight};
  min-height: ${minHeight};
`

export const Img = WithDesignStyledComponent(styled.img<{
  maxWidth?: string
  maxHeight?: string
  minWidth?: string
  minHeight?: string
  width?: string
  height?: string
}>`
  ${({ maxHeight, maxWidth, minHeight, minWidth, width, height }) =>
    imagePropsStyles({
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      width,
      height,
    })};
`)

export const BackgroundImg = WithDesignStyledComponent(styled.div<{
  src: string
  maxWidth?: string
  maxHeight?: string
  minWidth?: string
  minHeight?: string
  width?: string
  height?: string
  backgroundSize?: 'cover' | 'contain'
}>`
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${({ src }) => src});
  background-size: ${({ backgroundSize }) => backgroundSize};

  ${({ maxHeight, maxWidth, minHeight, minWidth, width, height }) =>
    imagePropsStyles({
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      width,
      height,
    })};
`)

export const LinkImg = WithDesignStyledComponent(styled.a``)
