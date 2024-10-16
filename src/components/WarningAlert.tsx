import Alert, { AlertProps } from '@mui/material/Alert'
import { ReactNode } from 'react'

interface WarningAlertProps extends AlertProps {
  children: ReactNode
}

export default function WarningAlert({
  children,
  ...props
}: WarningAlertProps) {
  return (
    <Alert severity="warning" {...props}>
      {children}
    </Alert>
  )
}
