import { useEffect, useRef, useState } from 'react'

export const useColorPicker = () => {
  const width = 200
  const height = 200
  const pickerCircle = { x: 30, y: 50, width: 7, height: 7 }
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pickerRef = useRef<HTMLCanvasElement | null>(null)
  const [colorPicked, setColorPicked] = useState(`rgb(0,0,0)`)
  const [isDnd, setIsDnd] = useState(false)

  const setDimensions = (
    ref: React.MutableRefObject<HTMLCanvasElement | null>
  ) => {
    const canvas = ref.current
    if (!canvas) return

    if (!ref.current?.width) return
    if (!ref.current?.height) return

    ref.current.width = width
    ref.current.height = height
  }

  const getCtx = (ref: React.MutableRefObject<HTMLCanvasElement | null>) => {
    const canvas = ref.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    return context
  }

  const createGradientOnWidth = (context: CanvasRenderingContext2D) => {
    const gradient = context.createLinearGradient(0, 0, width, 0)

    gradient.addColorStop(0, 'rgb(255, 0, 0)')
    gradient.addColorStop(0.15, 'rgb(255, 0, 255)')
    gradient.addColorStop(0.33, 'rgb(0, 0, 255)')
    gradient.addColorStop(0.49, 'rgb(0, 255, 255)')
    gradient.addColorStop(0.67, 'rgb(0, 255, 0)')
    gradient.addColorStop(0.84, 'rgb(255, 255, 0)')
    gradient.addColorStop(1, 'rgb(255, 0, 0)')

    return gradient
  }

  const createGradientOnHeight = (context: CanvasRenderingContext2D) => {
    const gradient = context.createLinearGradient(0, 0, 0, height)

    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)')
    return gradient
  }

  const clear = () => {
    const context = getCtx(pickerRef)

    if (!context) return
    context.clearRect(0, 0, width, height)
  }

  const createPickerCircle = (
    context: CanvasRenderingContext2D,
    positions = {
      x: pickerCircle.x,
      y: pickerCircle.y,
    }
  ) => {
    context.beginPath()
    context.arc(positions.x, positions.y, 10, 0, 2 * Math.PI, false)
    context.fillStyle = 'background'
    context.fill()
    context.lineWidth = 0.8

    context.strokeStyle = 'white'
    context.stroke()
  }

  const getColorByPosition = (x: number, y: number) => {
    const context = getCtx(canvasRef)

    if (!context) return

    const rgbValues = context.getImageData(x, y, 1, 1)
    return rgbValues
  }

  const getPositionByClick = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const currentCanvas = canvasRef.current
    if (!currentCanvas) return
    const rect = currentCanvas.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    return { x, y }
  }

  const printColor = (rgbValues: ImageData) => {
    const [r, g, b] = rgbValues.data

    const rgbColor = `rgb(${r},${g},${b})`

    setColorPicked(rgbColor)
  }

  const handleStart = () => {
    setIsDnd(true)
  }

  const handleEnd = () => {
    setIsDnd(false)
  }

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDnd) return
    const positions = getPositionByClick(e)
    if (!positions) return

    const { x, y } = positions
    const rgbValues = getColorByPosition(x, y)
    if (!rgbValues) return

    printColor(rgbValues)

    clear()

    const contextPicker = getCtx(pickerRef)
    if (!contextPicker) return

    createPickerCircle(contextPicker, positions)
  }

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const positions = getPositionByClick(e)
    if (!positions) return

    const { x, y } = positions

    const rgbValues = getColorByPosition(x, y)
    if (!rgbValues) return

    printColor(rgbValues)
  }

  const build = () => {
    setDimensions(canvasRef)
    setDimensions(pickerRef)

    const contextCanvas = getCtx(canvasRef)
    const contextPicker = getCtx(pickerRef)

    if (!contextCanvas) return
    if (!contextPicker) return

    const gradientWidth = createGradientOnWidth(contextCanvas)
    contextCanvas.fillStyle = gradientWidth
    contextCanvas.fillRect(0, 0, width, height)

    const gradientHeight = createGradientOnHeight(contextCanvas)
    contextCanvas.fillStyle = gradientHeight
    contextCanvas.fillRect(0, 0, width, height)

    createPickerCircle(contextPicker)
  }

  useEffect(() => {
    build()
  }, [])

  return {
    canvasRef,
    pickerRef,
    handleClick,
    colorPicked,
    handleMove,
    handleEnd,
    handleStart,
  }
}
