// @ts-ignore
import Money from './money.svg?react'

interface MoneySvgProps {
  changeColor?: boolean
}

export default function MoneySvg({ changeColor }: MoneySvgProps) {
  return (
    <Money
      className="money"
      style={{
        fill: changeColor ? '#21DB35' : 'black',
        transition: '0.25s ease all',
      }}
    />
  )
}
