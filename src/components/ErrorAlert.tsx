import Alert, { AlertProps } from '@mui/material/Alert'
import { ReactNode } from 'react'

interface ErrorAlertProps extends AlertProps {
  children: ReactNode
}

export default function ErrorAlert({ children, ...props }: ErrorAlertProps) {
  return (
    <Alert severity="error" {...props}>
      {children}
    </Alert>
  )
}
