import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useContext, useState } from 'react'
import Button from 'src/components/Button'
import InfoAlert from 'src/components/InfoAlert'
import QuestionHeader from 'src/components/QuestionHeader'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import BoxWithShadow from 'src/components/BoxWithShadow'
import AnimatedContainer from 'src/components/AnimatedContainer'
import WarningAlert from 'src/components/WarningAlert'

export default function QuestionDebtHighInterest() {
  const [hasHighInterestDebt, setHasHighInterestDebt] = useState<
    boolean | null
  >(null)

  const { info, setInfo, setStep } = useContext(WizardContext)

  const isYesSelected = hasHighInterestDebt === true
  const isNoSelected = hasHighInterestDebt === false

  return (
    <>
      <QuestionHeader
        title="Do you have high interests debt?"
        subtitle="This is generally considered a rate of 8% or higher on any of your payments. "
      />
      <Box display="flex">
        <BoxWithShadow
          onClick={() => setHasHighInterestDebt(true)}
          boxStyle={{ cursor: 'pointer' }}
          isSelected={isYesSelected}
          boxProps={{ mr: 5 }}
        >
          <h3>I do</h3>
        </BoxWithShadow>

        <BoxWithShadow
          isSelected={isNoSelected}
          onClick={() => setHasHighInterestDebt(false)}
          boxStyle={{ cursor: 'pointer' }}
        >
          <h3>Nope</h3>
        </BoxWithShadow>
      </Box>

      {hasHighInterestDebt !== null && (
        <Box mt={5}>
          <Button
            onClick={() => {
              setInfo({ ...info, hasHighInterestDebt })
              setStep(Questions.DebtRepaymentStrategy)
            }}
          >
            CONTINUE
          </Button>
        </Box>
      )}

      {!!hasHighInterestDebt && (
        <AnimatedContainer>
          <WarningAlert>
            <Typography>
              High interest debt is usually the first priority, because staying
              with a balance on any high interest debt incurs much more than you
              may expect over the long run and make it hard to save for other
              goals or investments.
            </Typography>
          </WarningAlert>
        </AnimatedContainer>
      )}
    </>
  )
}
