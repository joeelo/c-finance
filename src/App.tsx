import './App.css'
import Wizard from 'src/forms/Wizard/Wizard'
import Box from '@mui/material/Box'

export default function App() {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        width="90%"
        maxWidth={800}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Wizard />
      </Box>
    </Box>
  )
}
