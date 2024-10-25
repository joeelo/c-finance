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

  const getFinancialAdvice = () => {
    let str =
      "Thanks for taking this quiz! Connor is a financial analyst for real estate, and he's got a bit of advice based on your answers! "

    if (info.hasDebt && info.hasHighInterestDebt) {
      str += `High interest debt is the first thing that needs to go. This is because the interest on high interest debt is the biggest killer of wealth. Currently the debt is taking ${getDebtCalculation()}% of your annual income. `
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
