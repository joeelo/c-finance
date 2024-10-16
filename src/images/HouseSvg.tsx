import { useEffect } from 'react'
// @ts-ignore
import House from './house.svg?react'

interface HouseSvgProps {
  changeColor?: boolean
}

export default function HouseSvg({ changeColor }: HouseSvgProps) {
  useEffect(() => {
    const housePolygon = document.getElementById('bottom-window')
    const sideWindow = document.getElementById('side-window')
    const sideWindow2 = document.getElementById('side-window2')

    if (!housePolygon || !sideWindow || !sideWindow2) {
      return
    }

    if (changeColor) {
      housePolygon.style.fill = 'green'
      sideWindow.style.fill = 'green'
      sideWindow2.style.fill = 'green'

      return
    }

    housePolygon.style.fill = 'white'
    sideWindow.style.fill = 'white'
    sideWindow2.style.fill = 'white'
  }, [changeColor])

  return <House />
}
