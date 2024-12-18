// At some point in the future we may want to switch from numbered steps to enum of steps so it's easier to jump around
import { useState } from 'react'
import { WizardContext } from './WizardContext'
import QuestionAnnualIncome from './QuestionAnnualIncome'
import QuestionHasSavings from './QuestionHasSavings'
import QuestionMonthlyExpenses from './QuestionMonthlyExpenses'
import { Questions } from 'src/constants/Questions'
import QuestionShortTermSavingsGoals from './QuestionShortTermSavingsGoals'
import QuestionShortTermSavingsTimePeriod from './QuestionShortTermSavingsTimePeriod'
import QuestionShortTermSavingsHasGoals from './QuestionShortTermSavingsHasGoal'
import QuestionLongTermSavingsGoals from './QuestionsLongTermSavingsGoals'
import QuestionShortTermSavingsGoalAmount from './QuestionShortTermSavingsGoalAmount'
import QuestionLongTermSavingsPercentage from './QuestionLongTermSavingsPercentage'
import QuestionHasDebt from './QuestionHasDebt'
import QuestionDebtOustanding from './QuestionDebtOutstanding'
import QuestionDebtHighInterest from './QuestionDebtHighInterest'
import QuestionDebtRepaymentStrategy from './QuestionDebtRepaymentStrategy'
import QuestionInvestmentRiskTolerance from './QuestionInvestmentRiskTolerance'
import QuestionInvestmentGrowthRate from './QuestionInvestmentGrowthRate'
import CalculationsText from './CalculationsText'
import Box from '@mui/material/Box'
import useIsMobile from 'src/hooks/useIsMobile'
import ProgressBar from 'src/components/ProgressBar'

export default function Wizard() {
  const isMobile = useIsMobile()
  const [step, setStep] = useState(Questions.AnnualIncome)
  const [info, setInfo] = useState({})

  console.log(info)

  return (
    <>
      <ProgressBar
        total={Object.keys(Questions).length}
        current={Object.values(info).length}
      />

      <Box display="flex" justifyContent="center">
        <Box
          width="90%"
          maxWidth={800}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          pb={isMobile ? 5 : 0}
        >
          <WizardContext.Provider value={{ info, setInfo, step, setStep }}>
            {step === Questions.AnnualIncome && <QuestionAnnualIncome />}
            {step === Questions.MonthlyExpenses && <QuestionMonthlyExpenses />}
            {step === Questions.HasSavings && <QuestionHasSavings />}
            {step === Questions.ShortTermSavingsHasGoals && (
              <QuestionShortTermSavingsHasGoals />
            )}
            {step === Questions.ShortTermSavingsGoals && (
              <QuestionShortTermSavingsGoals />
            )}
            {step === Questions.ShortTermSavingsTimePeriod && (
              <QuestionShortTermSavingsTimePeriod />
            )}
            {step === Questions.ShortTermSavingsAmount && (
              <QuestionShortTermSavingsGoalAmount />
            )}
            {step === Questions.LongTermSavingsGoals && (
              <QuestionLongTermSavingsGoals />
            )}
            {step === Questions.LongTermSavingsPercentage && (
              <QuestionLongTermSavingsPercentage />
            )}
            {step === Questions.HasDebt && <QuestionHasDebt />}
            {step === Questions.DebtOutstanding && <QuestionDebtOustanding />}
            {step === Questions.DebtHighInterest && (
              <QuestionDebtHighInterest />
            )}
            {step === Questions.DebtRepaymentStrategy && (
              <QuestionDebtRepaymentStrategy />
            )}
            {step === Questions.InvestmentRiskTolerance && (
              <QuestionInvestmentRiskTolerance />
            )}
            {step === Questions.InvestmentGrowthRate && (
              <QuestionInvestmentGrowthRate />
            )}
            {step === Questions.Finish && <CalculationsText />}
          </WizardContext.Provider>
        </Box>
      </Box>
    </>
  )
}
