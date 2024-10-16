// @ts-ignore
import PalmTree from './palm-tree.svg?react'

interface PalmTreeSvgProps {
  changeColor?: boolean
}

export default function PalmTreeSvg({ changeColor }: PalmTreeSvgProps) {
  return (
    <PalmTree
      className="palm tree"
      style={{
        fill: changeColor ? 'green' : 'black',
        transition: '0.25s ease all',
      }}
    />
  )
}
