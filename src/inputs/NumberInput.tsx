import TextField, { TextFieldProps } from '@mui/material/TextField'
import { forwardRef } from 'react'

export type CustomTextFieldProps = {
  label: string
} & TextFieldProps

const NumberInput = forwardRef(function NumberInput(
  props: CustomTextFieldProps,
  ref,
) {
  return (
    <TextField inputRef={ref} color="primary" variant="outlined" {...props} />
  )
})

export default NumberInput
