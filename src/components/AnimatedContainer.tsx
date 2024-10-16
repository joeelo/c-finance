import Box from '@mui/material/Box'
import { ReactNode } from 'react'

interface AnimatedContainerProps {
  children: ReactNode
}

export default function AnimatedContainer({
  children,
}: AnimatedContainerProps) {
  return (
    <Box
      mt={5}
      sx={{
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
            scale: 0.8,
          },
          '100%': {
            opacity: 1,
            scale: 1,
          },
        },
        animation: 'fadeIn 0.5s ease-out forwards',
      }}
    >
      {children}
    </Box>
  )
}
