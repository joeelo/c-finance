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
import TypingAnimation from 'src/components/TypingAnimation'

export default function Wizard() {
  const [step, setStep] = useState(Questions.AnnualIncome)
  const [info, setInfo] = useState({})

  return (
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
      {step === Questions.DebtHighInterest && <QuestionDebtHighInterest />}
      {step === Questions.DebtRepaymentStrategy && (
        <QuestionDebtRepaymentStrategy />
      )}
      {step === Questions.InvestmentRiskTolerance && (
        <QuestionInvestmentRiskTolerance />
      )}
      {step === Questions.InvestmentGrowthRate && (
        <QuestionInvestmentGrowthRate />
      )}
      {step === Questions.Finish && (
        <TypingAnimation string="dude, it's been a blast chilling, thanks so much for letting us hang and I'm glad we both got to check our teams play - well one of us did for one game =,,(. But I'm stoked for this and the toffee, sign me up fam." />
      )}
    </WizardContext.Provider>
  )
}
