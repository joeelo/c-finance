import Box from '@mui/material/Box'
import { useContext, useState } from 'react'
import Button from 'src/components/Button'
import QuestionHeader from 'src/components/QuestionHeader'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import BoxWithShadow from 'src/components/BoxWithShadow'

enum SavingsGoals {
  ThreeMonths = '3_months',
  Year = 'year',
  None = 'none',
}

export default function QuestionShortTermSavingsTimePeriod() {
  const [savingsGoals, setSavingsGoal] = useState<SavingsGoals | null>(
    SavingsGoals.ThreeMonths,
  )

  const { info, setInfo, setStep } = useContext(WizardContext)

  return (
    <>
      <QuestionHeader title="When do you want to accomplish your short term goal?" />
      <Box display="flex">
        <BoxWithShadow
          onClick={() => setSavingsGoal(SavingsGoals.ThreeMonths)}
          boxStyle={{ cursor: 'pointer' }}
          isSelected={savingsGoals === SavingsGoals.ThreeMonths}
          boxProps={{ mr: 5 }}
        >
          <h3>3-6 Months</h3>
        </BoxWithShadow>

        <BoxWithShadow
          isSelected={savingsGoals === SavingsGoals.Year}
          onClick={() => setSavingsGoal(SavingsGoals.Year)}
          boxStyle={{ cursor: 'pointer' }}
          boxProps={{ mr: 5 }}
        >
          <h3>Closer to a year</h3>
        </BoxWithShadow>

        <BoxWithShadow
          isSelected={savingsGoals === SavingsGoals.None}
          onClick={() => setSavingsGoal(SavingsGoals.None)}
          boxStyle={{ cursor: 'pointer' }}
        >
          <h3>I'm not sure</h3>
        </BoxWithShadow>
      </Box>

      <Box mt={5}>
        <Button
          onClick={() => {
            setInfo({ ...info, shortTermSavingTimePeriod: savingsGoals })
            setStep(Questions.ShortTermSavingsAmount)
          }}
        >
          CONTINUE
        </Button>
      </Box>
    </>
  )
}
