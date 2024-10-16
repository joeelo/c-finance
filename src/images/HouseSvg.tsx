// @ts-ignore
import House from './house.svg?react'

interface HouseSvgProps {
  changeColor?: boolean
}

export default function HouseSvg({ changeColor }: HouseSvgProps) {
  return (
    <House
      className="house"
      style={{
        fill: changeColor ? '#21DB35' : 'black',
        transition: '0.25s ease all',
      }}
    />
  )
}
