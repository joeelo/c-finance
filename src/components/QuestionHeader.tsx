import Typography from '@mui/material/Typography'

interface QuestionHeaderProps {
  title: string
  subtitle?: string
}

export default function QuestionHeader({
  title,
  subtitle,
}: QuestionHeaderProps) {
  return (
    <>
      <Typography textAlign="center" variant="h1" mt={10} mb={subtitle ? 1 : 8}>
        {title}
      </Typography>
      {subtitle && (
        <Typography mb={8} variant="body1">
          {subtitle}
        </Typography>
      )}
    </>
  )
}
