import { useEffect } from 'react'
// @ts-ignore
import UpArrow from './down-arrow.svg?react'

interface DownArrowProps {
  changeColor?: boolean
}

export default function DownArrowSvg({ changeColor }: DownArrowProps) {
  useEffect(() => {
    const UpArrowElement = document.getElementById('down-arrow')

    if (!UpArrowElement) {
      return
    }

    if (changeColor) {
      UpArrowElement.style.fill = '#AA4A44'

      return
    }

    UpArrowElement.style.fill = '#000000'
  }, [changeColor])

  return <UpArrow />
}
