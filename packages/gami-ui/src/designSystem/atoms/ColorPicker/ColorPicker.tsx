import Input from 'designSystem/atoms/Input'
import React, { useRef, useState } from 'react'
import * as S from './ColorPicker.styles'
import { useColorPicker } from './useColorPicker'
import { usePickerTooltip } from 'hooks/usePickerTooltip'
import { cls } from 'core/utils/cls'

export interface IColorPicker {
  colorPicker?: string
}

const ColorPicker = ({ colorPicker = `` }: IColorPicker) => {
  const tooltipRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const inputRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>

  usePickerTooltip({ tooltipRef, inputRef })
  const [isVisible, setIsVisible] = useState(false)

  const {
    canvasRef,
    pickerRef,
    handleClick,
    colorPicked,
    handleMove,
    handleStart,
    handleEnd,
  } = useColorPicker({ colorPicker })

  const handleClickInput = () => setIsVisible(!isVisible)

  return (
    <S.Wrapper>
      <S.ColorPickerPanel
        ref={tooltipRef}
        className={cls({
          hide: !isVisible,
        })}
      >
        <S.ColorPicker>
          <S.TitlePicker level="h4" textAlign="left" width="full">
            Color Picker:
          </S.TitlePicker>
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
            <S.SelectedViewer style={{ background: colorPicked }} />
            <S.SelectedTitle level="h4">
              {colorPicked != '' ? colorPicked : 'Not Picked'}
            </S.SelectedTitle>
          </S.Info>
        </S.ColorPicker>
      </S.ColorPickerPanel>

      <div ref={inputRef}>
        <Input readOnly value={colorPicked} onClick={handleClickInput} />
      </div>
    </S.Wrapper>
  )
}

export default ColorPicker
