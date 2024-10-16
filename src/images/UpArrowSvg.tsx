import { useEffect } from 'react'
// @ts-ignore
import UpArrow from './up-arrow.svg?react'

interface UpArrowProps {
  changeColor?: boolean
}

export default function UpArrowSvg({ changeColor }: UpArrowProps) {
  useEffect(() => {
    const UpArrowElement = document.getElementById('up-arrow')

    if (!UpArrowElement) {
      return
    }

    if (changeColor) {
      UpArrowElement.style.fill = '#21DB35'

      return
    }

    UpArrowElement.style.fill = '#000000'
  }, [changeColor])

  return <UpArrow />
}
