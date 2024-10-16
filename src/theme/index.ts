import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans 3',
      'sans-serif',
      'Libre Baskerville',
      'serif',
    ].join(','),
    h1: {
      fontFamiy: 'Libre Baskerville',
      fontSize: 40,
    },
    h2: {
      fontFamiy: 'Libre Baskerville',
      fontSize: 34,
    },
    h3: {
      fontFamiy: 'Libre Baskerville',
      fontSize: 28,
    },
    body1: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 12,
      color: 'grey',
    },
  },
})

export default theme
