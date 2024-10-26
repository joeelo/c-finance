import Box from '@mui/material/Box'
import { useContext, useState } from 'react'
import Button from 'src/components/Button'
import QuestionHeader from 'src/components/QuestionHeader'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import BoxWithShadow from 'src/components/BoxWithShadow'
import InfoAlert from 'src/components/InfoAlert'
import Typography from '@mui/material/Typography'
import QuestionContainer from 'src/components/QuestionContainer'

export default function QuestionShortTermSavingsHasGoals() {
  const [hasSavingsGoals, setHasSavingsGoals] = useState<boolean | null>(null)

  const { info, setInfo, setStep } = useContext(WizardContext)

  const isYesSelected = hasSavingsGoals === true
  const isNoSelected = hasSavingsGoals === false

  return (
    <>
      <QuestionHeader title="Do you have short term saving goals?" />
      <QuestionContainer>
        <BoxWithShadow
          onClick={() => setHasSavingsGoals(true)}
          boxStyle={{ cursor: 'pointer' }}
          isSelected={isYesSelected}
        >
          <h3>Yup</h3>
        </BoxWithShadow>

        <BoxWithShadow
          isSelected={isNoSelected}
          onClick={() => setHasSavingsGoals(false)}
          boxStyle={{ cursor: 'pointer' }}
        >
          <h3>Not Really</h3>
        </BoxWithShadow>
      </QuestionContainer>

      {hasSavingsGoals !== null && (
        <Box mt={5}>
          <Button
            onClick={() => {
              setInfo({ ...info, hasSavingsGoals })
              setStep(
                hasSavingsGoals
                  ? Questions.ShortTermSavingsGoals
                  : Questions.LongTermSavingsGoals,
              )
            }}
          >
            CONTINUE
          </Button>
        </Box>
      )}

      {hasSavingsGoals === false && (
        <Box
          mt={5}
          sx={{
            '@keyframes fadeIn': {
              '0%': {
                opacity: 0,
                scale: 0.8,
              },
              '100%': {
                opacity: 1,
                scale: 1,
              },
            },
            animation: 'fadeIn 0.5s ease-out forwards',
          }}
        >
          <InfoAlert>
            <Typography>
              Sounds good! We'll skip straight to long term goals!
            </Typography>
          </InfoAlert>
        </Box>
      )}
    </>
  )
}
