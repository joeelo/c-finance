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

export default function QuestionLongTermSavingsPercentage() {
  const schema = object({
    longTermSavingsPercentage: number()
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
      longTermSavingsPercentage: data.longTermSavingsPercentage,
    })
    setStep(Questions.HasDebt)
  }

  return (
    <>
      <QuestionHeader title="What percentage of your monthly take home pay would you like to put towards your goal?" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Controller
            render={({ field, formState }) => {
              return (
                <NumberInput
                  {...field}
                  label="Take home percentage"
                  name="longTermSavingsPercentage"
                  error={!!formState.errors.longTermSavingsPercentage}
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
            name="longTermSavingsPercentage"
            control={control}
          />

          <Box display="flex" justifyContent="center" mt={6}>
            <Button type="submit">Next</Button>
          </Box>

          {errors.longTermSavingsPercentage && (
            <ErrorAlert sx={{ mt: 3 }}>
              {errors.longTermSavingsPercentage.message}
            </ErrorAlert>
          )}
        </Box>
      </form>
    </>
  )
}
