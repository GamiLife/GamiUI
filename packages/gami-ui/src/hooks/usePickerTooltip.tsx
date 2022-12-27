import { useEffect } from 'react'

export interface IUsePickerTooltip {
  tooltipRef: React.MutableRefObject<HTMLDivElement>
  inputRef: React.MutableRefObject<HTMLDivElement>
}

export const usePickerTooltip = ({ tooltipRef, inputRef }: IUsePickerTooltip) => {
  const margin = 15

  const getPositionInputRef = () => {
    const input = inputRef.current
    const { top, left, height } = input.getBoundingClientRect()
    return { top, left, height }
  }

  const getPositionTooltipRef = () => {
    const tooltip = tooltipRef.current
    const { height, width } = tooltip.getBoundingClientRect()

    const margins = margin * 2
    const spaceHeightTooltip = height + margins
    const spaceWidthTooltip = width + margins

    return { spaceHeightTooltip, spaceWidthTooltip, heighTooltip: height }
  }

  const setTooltipAbove = (topInput: number, heightTooltip: number) => {
    tooltipRef.current.style.top = `${topInput - heightTooltip - margin}px`
  }

  const setTooltipBelow = (topInput: number, heightInput: number) => {
    tooltipRef.current.style.top = `${topInput + heightInput + margin}px`
  }

  const handleTooltip = () => {
    const { top, height } = getPositionInputRef()
    const { spaceHeightTooltip, heighTooltip } = getPositionTooltipRef()

    const isValidVertical = top > spaceHeightTooltip

    if (isValidVertical) {
      setTooltipAbove(top, heighTooltip)
      return
    }

    setTooltipBelow(top, height)
  }

  useEffect(() => {
    handleTooltip()
  }, [tooltipRef.current, inputRef.current])

  return {}
}
