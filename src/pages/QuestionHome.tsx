import { useState } from "react"
import IncomeQuestion from "src/components/IncomeQuestion"

export default function QuestionHome() {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  console.log(setCurrentQuestion)

  if (currentQuestion === 0) {
    return <IncomeQuestion />
  }

  return null
}
