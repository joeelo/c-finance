import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useContext, useState } from 'react'
import BoxWithShadow from 'src/components/BoxWithShadow'
import Button from 'src/components/Button'
import QuestionHeader from 'src/components/QuestionHeader'
import { WizardContext } from './WizardContext'
import { Questions } from 'src/constants/Questions'
import UpArrowSvg from 'src/images/UpArrowSvg'
import DownArrowSvg from 'src/images/DownArrowSvg'
import EqualSvg from 'src/images/EqualSvg'

enum Tolerance {
  High = 'high',
  Neutral = 'neutral',
  Low = 'low',
}

export default function QuestionInvestmentRiskTolerance() {
  const [tolerance, setTolerance] = useState<Tolerance | null>(null)
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
    height: '100%',
  } as BoxProps

  return (
    <>
      <QuestionHeader
        title="What is your investment risk tolerance"
        subtitle="It's higher if you're more of a risk taker and lower if you're a little more averse to risk."
      />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <BoxWithShadow
          onClick={() => setTolerance(Tolerance.High)}
          boxStyle={boxStyles}
        >
          <Box {...boxProps}>
            <Box width="64%" paddingTop={2}>
              <UpArrowSvg changeColor={tolerance === Tolerance.High} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              High
            </Typography>
          </Box>
        </BoxWithShadow>
        <BoxWithShadow
          onClick={() => setTolerance(Tolerance.Neutral)}
          boxStyle={boxStyles}
        >
          <Box {...boxProps}>
            <Box width="50%" paddingTop={2}>
              <EqualSvg changeColor={tolerance === Tolerance.Neutral} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              Neutral
            </Typography>
          </Box>
        </BoxWithShadow>
        <BoxWithShadow
          onClick={() => setTolerance(Tolerance.Low)}
          boxStyle={boxStyles}
        >
          <Box {...boxProps}>
            <Box
              maxHeight={100}
              width="60%"
              marginBottom={3}
              display="flex"
              alignItems="center"
              pt={5}
            >
              <DownArrowSvg changeColor={tolerance === Tolerance.Low} />
            </Box>
            <Typography style={{ fontWeight: 'bold', marginTop: 8 }}>
              Low
            </Typography>
          </Box>
        </BoxWithShadow>
      </Box>

      <Box mt={5}>
        <Button
          onClick={() => {
            setInfo({ ...info, investmentRiskTolerance: tolerance })
            setStep(Questions.InvestmentGrowthRate)
          }}
        >
          CONTINUE
        </Button>
      </Box>
    </>
  )
}
