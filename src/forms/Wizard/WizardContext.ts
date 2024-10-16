import { createContext, SetStateAction } from 'react'
import { Questions } from 'src/constants/Questions'

interface WizardContextProps {
  info: Record<string, any>
  setInfo: React.Dispatch<SetStateAction<{}>>
  step: Questions
  setStep: React.Dispatch<SetStateAction<Questions>>
}

export const WizardContext = createContext<WizardContextProps>({
  info: {},
  setInfo: () => {},
  step: Questions.AnnualIncome,
  setStep: () => {},
})
