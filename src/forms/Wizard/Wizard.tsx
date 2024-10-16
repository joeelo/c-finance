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

export default function Wizard() {
  const [step, setStep] = useState(Questions.AnnualIncome)
  const [info, setInfo] = useState({})

  console.log(info)

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
    </WizardContext.Provider>
  )
}
