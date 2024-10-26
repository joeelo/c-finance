import './App.css'
import Wizard from 'src/forms/Wizard/Wizard'
import Box from '@mui/material/Box'
import useIsMobile from './hooks/useIsMobile'

export default function App() {
  const isMobile = useIsMobile()

  return (
    <Box display="flex" justifyContent="center">
      <Box
        width="90%"
        maxWidth={800}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        pb={isMobile ? 5 : 0}
      >
        <Wizard />
      </Box>
    </Box>
  )
}
