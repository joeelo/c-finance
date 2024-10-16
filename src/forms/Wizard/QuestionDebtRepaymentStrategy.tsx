import Box from '@mui/material/Box'
import { useContext, useState } from 'react'
import Button from 'src/components/Button'
import QuestionHeader from 'src/components/QuestionHeader'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import BoxWithShadow from 'src/components/BoxWithShadow'

enum RepaymentStrategies {
  Aggressive = 'aggressive',
  Balanced = 'balanced',
}

export default function QuestionDebtRepaymentStrategy() {
  const [debtStrategy, setDebtStrategy] = useState<RepaymentStrategies | null>(
    null,
  )

  const { info, setInfo, setStep } = useContext(WizardContext)

  const isAggressive = debtStrategy === RepaymentStrategies.Aggressive
  const isBalanced = debtStrategy === RepaymentStrategies.Balanced

  return (
    <>
      <QuestionHeader
        title="What type of debt strategy are you going for?"
        subtitle="Are you focused on paying down debt aggressively or balancing debt repayment with saving/investing?"
      />
      <Box display="flex">
        <BoxWithShadow
          onClick={() => setDebtStrategy(RepaymentStrategies.Aggressive)}
          boxStyle={{ cursor: 'pointer' }}
          isSelected={isAggressive}
          boxProps={{ mr: 5 }}
        >
          <h3>Aggressive</h3>
        </BoxWithShadow>

        <BoxWithShadow
          isSelected={isBalanced}
          onClick={() => setDebtStrategy(RepaymentStrategies.Balanced)}
          boxStyle={{ cursor: 'pointer' }}
        >
          <h3>Balanced</h3>
        </BoxWithShadow>
      </Box>

      {debtStrategy !== null && (
        <Box mt={5}>
          <Button
            onClick={() => {
              setInfo({ ...info, debtStrategy })
              setStep(Questions.DebtOutstanding)
            }}
          >
            CONTINUE
          </Button>
        </Box>
      )}
    </>
  )
}
