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

export default function QuestionShortTermSavingsGoalAmount() {
  const schema = object({
    shortTermSavingsGoalAmount: number()
      .typeError('Must be a number')
      .min(0)
      .max(1000000, "That's a bit longer term")
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
      shortTermSavingsGoalAmount: data.shortTermSavingsGoalAmount,
    })
    setStep(Questions.LongTermSavingsGoals)
  }

  return (
    <>
      <QuestionHeader title="How much would you like to save?" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Controller
            render={({ field, formState }) => {
              return (
                <NumberInput
                  {...field}
                  label="Amount"
                  name="shortTermSavingsGoalAmount"
                  error={!!formState.errors.shortTermSavingsGoalAmount}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography color="green">$</Typography>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )
            }}
            defaultValue={'' as any} // Type conversion for formik, keep number validation but pass string instead of 0 as default value
            name="shortTermSavingsGoalAmount"
            control={control}
          />

          <Box display="flex" justifyContent="center" mt={6}>
            <Button type="submit">Next</Button>
          </Box>

          {errors.shortTermSavingsGoalAmount && (
            <ErrorAlert sx={{ mt: 3 }}>
              {errors.shortTermSavingsGoalAmount.message}
            </ErrorAlert>
          )}
        </Box>
      </form>
    </>
  )
}
