import Box, { BoxProps } from '@mui/material/Box'
import { CSSProperties, ReactNode } from 'react'
import useIsMobile from 'src/hooks/useIsMobile'

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
  const isMobile = useIsMobile()

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={5}
      border={'1px solid rgba(0,0,0,0.1)'}
      width={isMobile ? '60%' : 200}
      minHeight={isMobile ? 50 : 100}
      mb={isMobile ? 5 : 0}
      borderRadius={4}
      mr={!isMobile ? 5 : 0}
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
