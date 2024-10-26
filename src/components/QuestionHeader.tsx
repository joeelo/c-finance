import Typography from '@mui/material/Typography'
import useIsMobile from 'src/hooks/useIsMobile'

interface QuestionHeaderProps {
  title: string
  subtitle?: string
}

export default function QuestionHeader({
  title,
  subtitle,
}: QuestionHeaderProps) {
  const isMobile = useIsMobile()

  function getMarginBottom() {
    if (subtitle) return 1
    if (isMobile) return 6
    return 10
  }

  return (
    <>
      <Typography
        textAlign="center"
        variant="h1"
        fontSize={isMobile ? 36 : 54}
        mt={isMobile ? 4 : 10}
        mb={getMarginBottom()}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography mb={isMobile ? 4 : 10} variant="body1">
          {subtitle}
        </Typography>
      )}
    </>
  )
}
