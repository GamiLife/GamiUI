import React from 'react'
import * as S from './ColorPicker.styles'
import { useColorPicker } from './useColorPicker'

export interface IColorPicker {
  defaultValue?: string
}

const ColorPicker = ({ defaultValue }: IColorPicker) => {
  const {
    canvasRef,
    pickerRef,
    handleClick,
    colorPicked,
    handleMove,
    handleStart,
    handleEnd,
  } = useColorPicker()

  return (
    <S.ColorPicker>
      <S.CanvasContainer>
        <S.Canvas ref={canvasRef} />
        <S.CanvasPicker
          ref={pickerRef}
          onClick={handleClick}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
        />
      </S.CanvasContainer>

      <S.Info>
        <S.SelectedTitle level="h3">Color selected:</S.SelectedTitle>
        <S.SelectedViewer style={{ background: colorPicked }} />
        <p>{colorPicked}</p>
      </S.Info>
    </S.ColorPicker>
  )
}

export default ColorPicker
