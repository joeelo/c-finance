import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase'
import { ReactNode } from 'react'

interface ButtonProps extends ButtonBaseProps {
  children: ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonBase
      sx={{
        border: '1px solid rgba(0, 0, 0, 0.2)',
        padding: 2,
        borderRadius: 1,
        minWidth: 150,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px 0px',
        ':hover': {
          boxShadow: 'rgba(0, 255, 0, 0.2) 0px 22px 30px -8px',
          background: '#00AD09',
          color: 'white',
        },
        transition: '0.25s all ease',
      }}
      {...props}
    >
      {' '}
      {children}{' '}
    </ButtonBase>
  )
}
