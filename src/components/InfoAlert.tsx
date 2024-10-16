import Alert, { AlertProps } from '@mui/material/Alert'
import { ReactNode } from 'react'

interface InfoAlertProps extends AlertProps {
  children: ReactNode
}

export default function InfoAlert({ children, ...props }: InfoAlertProps) {
  return (
    <Alert severity="info" {...props}>
      {children}
    </Alert>
  )
}
