import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import useIsMobile from 'src/hooks/useIsMobile'

interface QuestionContainerProps {
  children: ReactNode
}

export default function QuestionContainer({
  children,
}: QuestionContainerProps) {
  const isMobile = useIsMobile()

  return (
    <Box
      width="100%"
      mt={isMobile ? 2 : 0}
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      justifyContent="center"
      alignItems={isMobile ? 'center' : ''}
      mb={isMobile ? 10 : 3}
    >
      {children}
    </Box>
  )
}
