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
    const sideWindow3 = document.getElementById('side-window3')

    if (!housePolygon || !sideWindow || !sideWindow2 || !sideWindow3) {
      return
    }

    if (changeColor) {
      housePolygon.style.fill = '#1AAF2A'
      sideWindow.style.fill = '#1AAF2A'
      sideWindow2.style.fill = '#1AAF2A'
      sideWindow3.style.fill = '#1AAF2A'

      return
    }

    housePolygon.style.fill = 'white'
    sideWindow.style.fill = 'white'
    sideWindow2.style.fill = 'white'
    sideWindow3.style.fill = 'white'
  }, [changeColor])

  return <House />
}
