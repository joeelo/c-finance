import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import NumberInput from 'src/inputs/NumberInput'
import { number, object } from 'yup'
import Button from 'src/components/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { WizardContext } from './WizardContext'
import ErrorAlert from 'src/components/ErrorAlert'
import QuestionHeader from 'src/components/QuestionHeader'
import InputAdornment from '@mui/material/InputAdornment'
import { Questions } from 'src/constants/Questions'

export default function QuestionInvestmentGrowthRate() {
  const schema = object({
    investmentGrowthRate: number()
      .typeError('Must be a number')
      .min(0)
      .max(100, "Percentages don't work like that here!")
      .required('You have to put something!'),
  })

  const { info, setInfo, setStep } = useContext(WizardContext)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    setInfo({
      ...info,
      investmentGrowthRate: data.investmentGrowthRate,
    })
    setStep(Questions.HasDebt)
  }

  return (
    <>
      <QuestionHeader
        title="What is your target growth rate for investments overall?"
        subtitle="This is the amount that you want your money to grow at annually. Typically this is around 8%. Depending on your risk tolerance it may be higher or lower."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Controller
            render={({ field, formState }) => {
              return (
                <NumberInput
                  {...field}
                  label="Target rate"
                  name="investmentGrowthRate"
                  error={!!formState.errors.investmentGrowthRate}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography color="green">%</Typography>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )
            }}
            defaultValue={'' as any} // Type conversion for formik, keep number validation but pass string instead of 0 as default value
            name="investmentGrowthRate"
            control={control}
          />

          <Box display="flex" justifyContent="center" mt={6}>
            <Button type="submit">Next</Button>
          </Box>

          {errors.investmentGrowthRate && (
            <ErrorAlert sx={{ mt: 3 }}>
              {errors.investmentGrowthRate.message}
            </ErrorAlert>
          )}
        </Box>
      </form>
    </>
  )
}
