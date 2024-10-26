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
import QuestionContainer from 'src/components/QuestionContainer'

export default function QuestionHasSavings() {
  const { info, setInfo, setStep } = useContext(WizardContext)
  const [hasSavings, setHasSavings] = useState<boolean | null>(null)

  const isYesSelected = hasSavings === true
  const isNoSelected = hasSavings === false

  return (
    <>
      <QuestionHeader title="Do you have a savings account?" />
      <QuestionContainer>
        <BoxWithShadow
          onClick={() => setHasSavings(true)}
          boxStyle={{ cursor: 'pointer' }}
          isSelected={isYesSelected}
        >
          <h3>Yes</h3>
        </BoxWithShadow>

        <BoxWithShadow
          isSelected={isNoSelected}
          onClick={() => setHasSavings(false)}
          boxStyle={{ cursor: 'pointer' }}
        >
          <h3>Not Yet</h3>
        </BoxWithShadow>
      </QuestionContainer>

      {hasSavings !== null && (
        <Box mt={5}>
          <Button
            onClick={() => {
              setInfo({ ...info, hasSavings })
              setStep(Questions.ShortTermSavingsHasGoals)
            }}
          >
            CONTINUE
          </Button>
        </Box>
      )}

      {hasSavings === false && (
        <AnimatedContainer>
          <InfoAlert>
            <Typography>
              You should consider saving at least 1-6 months of bills as an
              emergency fund. We can help you get there after learning a bit
              more!
            </Typography>
          </InfoAlert>
        </AnimatedContainer>
      )}
    </>
  )
}
