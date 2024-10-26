import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useContext, useState } from 'react'
import BoxWithShadow from 'src/components/BoxWithShadow'
import Button from 'src/components/Button'
import QuestionHeader from 'src/components/QuestionHeader'
import CarSvg from 'src/images/CarSvg'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import PalmTreeSvg from 'src/images/PalmTreeSvg'
import MoneySvg from 'src/images/MoneySvg'
import useIsMobile from 'src/hooks/useIsMobile'

enum Goals {
  Car = 'car',
  Vacation = 'vacation',
  EmergencyFund = 'emergency_fund',
  Other = 'other',
}

export default function QuestionShortTermSavingsGoals() {
  const isMobile = useIsMobile()
  const [goal, setGoal] = useState<Goals | null>(null)
  const { info, setInfo, setStep } = useContext(WizardContext)

  // follow up questions How much do you want to save - are you looking for 3-6 months or closer to a year?
  // No specific short term goals - suggest building an emergency fund.

  const boxStyles = {
    height: 250,
    width: 200,
    marginRight: isMobile ? 0 : 20,
    padding: 20,
    cursor: 'pointer',
  }

  const boxProps = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  } as BoxProps

  return (
    <>
      <QuestionHeader title="Do you have a short term savings goal?" />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <BoxWithShadow onClick={() => setGoal(Goals.Car)} boxStyle={boxStyles}>
          <Box {...boxProps}>
            <Box width="100%" paddingTop={5}>
              <CarSvg changeColor={goal === Goals.Car} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              Car
            </Typography>
          </Box>
        </BoxWithShadow>
        <BoxWithShadow
          onClick={() => setGoal(Goals.Vacation)}
          boxStyle={boxStyles}
        >
          <Box {...boxProps}>
            <Box width="50%" paddingTop={2}>
              <PalmTreeSvg changeColor={goal === Goals.Vacation} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              Vacation
            </Typography>
          </Box>
        </BoxWithShadow>
        <BoxWithShadow
          onClick={() => setGoal(Goals.EmergencyFund)}
          boxStyle={boxStyles}
        >
          <Box {...boxProps}>
            <Box maxHeight={100} width="50%" paddingTop={3}>
              <MoneySvg changeColor={goal === Goals.EmergencyFund} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              Emergency Fund
            </Typography>
          </Box>
        </BoxWithShadow>
      </Box>

      <Box mt={5}>
        <Button
          onClick={() => {
            setInfo({ ...info, shortTermSavingsGoal: goal })
            setStep(Questions.ShortTermSavingsTimePeriod)
          }}
        >
          CONTINUE
        </Button>
      </Box>
    </>
  )
}
