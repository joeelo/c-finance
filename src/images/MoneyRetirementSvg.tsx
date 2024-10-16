import { useEffect } from 'react'
// @ts-ignore
import MoneyRetirement from './money-retirement.svg?react'

interface MoneyRetirementProps {
  changeColor?: boolean
}

export default function MoneyRetirementSvg({
  changeColor,
}: MoneyRetirementProps) {
  useEffect(() => {
    const moneyRetirementElement = document.getElementById('money-bag')

    if (!moneyRetirementElement) {
      return
    }

    if (changeColor) {
      moneyRetirementElement.style.fill = '#21DB35'

      return
    }

    moneyRetirementElement.style.fill = '#000000'
  }, [changeColor])

  return <MoneyRetirement />
}
