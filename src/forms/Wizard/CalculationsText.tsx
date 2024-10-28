import Box from '@mui/material/Box'
import { useContext } from 'react'
import TypingAnimation from 'src/components/TypingAnimation'
import { WizardContext } from './WizardContext'
import QuestionHeader from 'src/components/QuestionHeader'

export default function CalculationsText() {
  const { info } = useContext(WizardContext)

  console.log(info)

  const getDebtCalculation = () => {
    return Number((info.debtOutstanding / info.annualIncome) * 100).toFixed(2)
  }

  const getMonthlyExpensesRatio = () => {
    return Number(
      (
        (Number(info.monthlyExpenses) / Number(info.annualIncome / 12)) *
        100
      ).toFixed(2),
    )
  }

  const getFinancialAdvice = () => {
    let str =
      'Thanks for taking this quiz! We know it can be daunting to go through so many questions. '

    if (info.hasDebt && info.hasHighInterestDebt) {
      str += `High interest debt is the first thing that needs to go. This is because the interest on high interest debt is the biggest killer of wealth. Currently the debt is taking ${getDebtCalculation()}% of your annual income. `
    }

    if (info.monthlyExpenses) {
      const expensesRatio = getMonthlyExpensesRatio()

      str += `Your monthly expenses are ${expensesRatio}% of your monthly expenses. `

      if (expensesRatio < 30) {
        str += `This is a great ratio for your monthly expenses. This leaves a lot of room for saving and spending on fun things.`
      }

      if (expensesRatio >= 30 && expensesRatio < 45) {
        str += `This gives you a lot of leeway in your spending.`
      }

      if (expensesRatio >= 45 && expensesRatio <= 55) {
        str += `This is a normal range for your fixed costs (housing, bills, etc). You're on a good track.`
      }

      if (expensesRatio > 55) {
        str += `Your fixed costs (housing, bills, etc) should be around 50% of your take home. Let's see if we can bring that number down a bit. `
      }
    }

    return str
  }

  return (
    <Box maxWidth={600}>
      <QuestionHeader title="Summary" />
      <TypingAnimation string={getFinancialAdvice()} />
    </Box>
  )
}
