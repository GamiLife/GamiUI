import styled from '@emotion/styled'
import Container from 'designSystem/layouts/Container'
import { lightTheme } from 'styles/tokens/lightTheme'
import Title from '../Title'

export const ColorPicker = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Canvas = styled.canvas`
  border: 1px solid ${lightTheme.neutral[600]};
`

export const CanvasPicker = styled.canvas`
  border: 1px solid ${lightTheme.neutral[600]};
  position: absolute;
  left: 0px;
  top: 0px;
`

export const Info = styled.div`
  width: 12em;
  display: flex;
  margin-left: 4em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const SelectedTitle = styled(Title)``

export const SelectedViewer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid rgba(15, 15, 15, 0.2);
`

export const CanvasContainer = styled(Container)`
  position: relative;
`
