import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import NumberInput from 'src/inputs/NumberInput'
import { number, object } from 'yup'
import Button from 'src/components/Button'
import Box from '@mui/material/Box'
import { useContext } from 'react'
import { WizardContext } from './WizardContext'
import ErrorAlert from 'src/components/ErrorAlert'
import QuestionHeader from 'src/components/QuestionHeader'
import InputAdornment from '@mui/material/InputAdornment'
import { Questions } from 'src/constants/Questions'

export default function QuestionMonthlyExpenses() {
  const schema = object({
    monthlyExpenses: number().min(0).required(),
  })

  const { setInfo, info, setStep } = useContext(WizardContext)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    setInfo({ ...info, monthlyExpenses: data.monthlyExpenses })
    setStep(Questions.HasSavings)
  }

  return (
    <>
      <QuestionHeader
        title="What are your monthly expenses"
        subtitle="These are your fixed costs, or things you have to pay for every month
        ie: rent, utilities, phone bill, etc."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Controller
            render={({ field, formState }) => {
              return (
                <NumberInput
                  {...field}
                  label="Monthly Expenses"
                  name="monthlyExpenses"
                  error={!!formState.errors.monthlyExpenses}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    },
                  }}
                />
              )
            }}
            defaultValue={'' as any} // Type conversion for formik, keep number validation but pass string instead of 0 as default value
            name="monthlyExpenses"
            control={control}
          />

          <Box display="flex" justifyContent="center" mt={6}>
            <Button type="submit">Next</Button>
          </Box>

          {errors.monthlyExpenses && (
            <ErrorAlert sx={{ mt: 3 }}>
              {errors.monthlyExpenses.message}
            </ErrorAlert>
          )}
        </Box>
      </form>
    </>
  )
}
