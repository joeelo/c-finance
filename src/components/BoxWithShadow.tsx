import Box, { BoxProps } from '@mui/material/Box'
import { CSSProperties, ReactNode } from 'react'

interface BoxWithShadowProps {
  children: ReactNode
  boxStyle?: CSSProperties
  boxProps?: BoxProps
  isSelected?: boolean
  onClick?: () => void
}

export default function BoxWithShadow({
  children,
  boxStyle,
  boxProps,
  isSelected,
  ...props
}: BoxWithShadowProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={5}
      border={'1px solid rgba(0,0,0,0.1)'}
      minWidth={150}
      minHeight={100}
      borderRadius={4}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 22px 30px -8px',
        ...boxStyle,
      }}
      sx={{
        ...(!isSelected
          ? {}
          : {
              background: '#1463E3',
              color: 'white',
              transition: '0.25s ease all',
            }),
      }}
      {...boxProps}
      {...props}
    >
      {children}
    </Box>
  )
}
