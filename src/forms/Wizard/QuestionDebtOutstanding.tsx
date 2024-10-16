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

export default function QuestionDebtOustanding() {
  const schema = object({
    debtOutstanding: number()
      .typeError('Must be a number')
      .min(0)
      .max(10000000, 'You may need to contact a professional')
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
    setInfo({ ...info, debtOutstanding: data.debtOutstanding })
    setStep(Questions.DebtHighInterest)
  }

  return (
    <>
      <QuestionHeader title="What is the amount of outstanding debt?" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Controller
            render={({ field, formState }) => {
              return (
                <NumberInput
                  {...field}
                  label="amount"
                  name="debtOutstanding"
                  error={!!formState.errors.debtOutstanding}
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
            name="debtOutstanding"
            control={control}
          />

          <Box display="flex" justifyContent="center" mt={6}>
            <Button type="submit">Next</Button>
          </Box>

          {errors.debtOutstanding && (
            <ErrorAlert sx={{ mt: 3 }}>
              {errors.debtOutstanding.message}
            </ErrorAlert>
          )}
        </Box>
      </form>
    </>
  )
}
