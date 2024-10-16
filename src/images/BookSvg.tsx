// @ts-ignore
import Book from './book.svg?react'
import { useEffect } from 'react'

interface BookSvgProps {
  changeColor?: boolean
}

export default function BookSvg({ changeColor }: BookSvgProps) {
  useEffect(() => {
    const carElement = document.getElementById('book-top')

    if (!carElement) {
      return
    }

    if (changeColor) {
      carElement.style.fill = 'green'

      return
    }

    carElement.style.fill = 'white'
  }, [changeColor])

  return <Book />
}
