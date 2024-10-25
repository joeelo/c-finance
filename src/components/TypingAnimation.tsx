// Can use innerHTML to code out whole html inputs ie:
// <h1> debt</h1> <p>summary line</p>

import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'

export default function TypingAnimation({ string = '', speed = 50 }) {
  const [shownString, setShownString] = useState('')

  useEffect(() => {
    let index = 0
    let newString = shownString

    const interval = setInterval(() => {
      setShownString((newString += string.charAt(index)))
      index += 1

      if (index === string.length - 1) {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [])

  return (
    <Typography id="cursor" variant="h5">
      {shownString}
    </Typography>
  )
}
