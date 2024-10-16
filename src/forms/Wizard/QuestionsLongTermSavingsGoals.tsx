import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useContext, useState } from 'react'
import BoxWithShadow from 'src/components/BoxWithShadow'
import Button from 'src/components/Button'
import QuestionHeader from 'src/components/QuestionHeader'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import HouseSvg from 'src/images/HouseSvg'
import BookSvg from 'src/images/BookSvg'
import MoneyRetirementSvg from 'src/images/MoneyRetirementSvg'

enum Goals {
  House = 'house',
  Tuition = 'tuition',
  Retirement = 'retirement',
  Other = 'other',
}

export default function QuestionLongTermSavingsGoals() {
  const [goal, setGoal] = useState<Goals | null>(null)
  const { info, setInfo, setStep } = useContext(WizardContext)

  const boxStyles = {
    height: 250,
    width: 200,
    marginRight: 20,
    padding: 20,
    cursor: 'pointer',
  }

  const boxProps = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  } as BoxProps

  return (
    <>
      <QuestionHeader title="What's your long term savings goal?" />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <BoxWithShadow
          onClick={() => setGoal(Goals.House)}
          boxStyle={boxStyles}
        >
          <Box {...boxProps}>
            <Box
              width="100%"
              paddingTop={2}
              display="flex"
              justifyContent="center"
              minHeight={150}
            >
              <HouseSvg changeColor={goal === Goals.House} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              House
            </Typography>
          </Box>
        </BoxWithShadow>
        <BoxWithShadow
          onClick={() => setGoal(Goals.Tuition)}
          boxStyle={boxStyles}
        >
          <Box {...boxProps}>
            <Box
              paddingTop={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight={150}
            >
              <BookSvg changeColor={goal === Goals.Tuition} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              Tuition
            </Typography>
          </Box>
        </BoxWithShadow>
        <BoxWithShadow
          onClick={() => setGoal(Goals.Retirement)}
          boxStyle={boxStyles}
        >
          <Box {...boxProps}>
            <Box paddingTop={3}>
              <MoneyRetirementSvg changeColor={goal === Goals.Retirement} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              Retirement
            </Typography>
          </Box>
        </BoxWithShadow>
      </Box>

      <Box mt={5}>
        <Button
          onClick={() => {
            setInfo({ ...info, longTermSavingsGoal: goal })
            setStep(Questions.ShortTermSavingsTimePeriod)
          }}
        >
          CONTINUE
        </Button>
      </Box>
    </>
  )
}
