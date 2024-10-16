import Box from '@mui/material/Box'
import { useContext, useState } from 'react'
import Button from 'src/components/Button'
import QuestionHeader from 'src/components/QuestionHeader'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import BoxWithShadow from 'src/components/BoxWithShadow'

export default function QuestionHasDebt() {
  const [hasDebt, setHasDebt] = useState<boolean | null>(null)

  const { info, setInfo, setStep } = useContext(WizardContext)

  const isYesSelected = hasDebt === true
  const isNoSelected = hasDebt === false

  return (
    <>
      <QuestionHeader
        title="Do you have any outstanding debt?"
        subtitle="This includes credit cards, student loans, payment plans etc."
      />
      <Box display="flex">
        <BoxWithShadow
          onClick={() => setHasDebt(true)}
          boxStyle={{ cursor: 'pointer' }}
          isSelected={isYesSelected}
          boxProps={{ mr: 5 }}
        >
          <h3>Yes</h3>
        </BoxWithShadow>

        <BoxWithShadow
          isSelected={isNoSelected}
          onClick={() => setHasDebt(false)}
          boxStyle={{ cursor: 'pointer' }}
        >
          <h3>Debt free</h3>
        </BoxWithShadow>
      </Box>

      {hasDebt !== null && (
        <Box mt={5}>
          <Button
            onClick={() => {
              setInfo({ ...info, hasDebt })
              if (!hasDebt) {
                setStep(Questions.InvestmentRiskTolerance)
              } else {
                setStep(Questions.DebtOutstanding)
              }
            }}
          >
            CONTINUE
          </Button>
        </Box>
      )}
    </>
  )
}
