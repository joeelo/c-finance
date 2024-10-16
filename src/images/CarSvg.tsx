import { useEffect } from 'react'
// @ts-ignore
import Car from './car.svg?react'

interface CarSvgProps {
  changeColor?: boolean
}

export default function CarSvg({ changeColor }: CarSvgProps) {
  useEffect(() => {
    const carElement = document.getElementById('path2853')

    if (!carElement) {
      return
    }

    if (changeColor) {
      carElement.style.fill = '#21DB35'
      carElement.style.stroke = 'white'

      return
    }

    carElement.style.fill = 'white'
    carElement.style.stroke = 'black'
  }, [changeColor])

  return <Car />
}
