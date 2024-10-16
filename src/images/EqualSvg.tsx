import { useEffect } from 'react'
// @ts-ignore
import Equal from './equal.svg?react'

interface EqualProps {
  changeColor?: boolean
}

export default function EqualSvg({ changeColor }: EqualProps) {
  useEffect(() => {
    const EqualElement = document.getElementById('equal')

    if (!EqualElement) {
      return
    }

    if (changeColor) {
      EqualElement.style.fill = '#FFC000'

      return
    }

    EqualElement.style.fill = '#000000'
  }, [changeColor])

  return <Equal />
}
