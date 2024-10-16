import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useContext, useState } from 'react'
import Button from 'src/components/Button'
import InfoAlert from 'src/components/InfoAlert'
import QuestionHeader from 'src/components/QuestionHeader'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import BoxWithShadow from 'src/components/BoxWithShadow'

export default function QuestionHasSavings() {
  const [hasSavings, setHasSavings] = useState<boolean | null>(null)

  const { info, setInfo, setStep } = useContext(WizardContext)

  const isYesSelected = hasSavings === true
  const isNoSelected = hasSavings === false

  return (
    <>
      <QuestionHeader title="Do you have a savings account?" />
      <Box display="flex">
        <BoxWithShadow
          onClick={() => setHasSavings(true)}
          boxStyle={{ cursor: 'pointer' }}
          isSelected={isYesSelected}
          boxProps={{ mr: 5 }}
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
      </Box>

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
              You should consider saving at least 1-6 months of bills as an
              emergency fund. We can help you get there after learning a bit
              more!
            </Typography>
          </InfoAlert>
        </Box>
      )}
    </>
  )
}
