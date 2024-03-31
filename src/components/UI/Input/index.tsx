import { InputHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isError = false, ...props }, ref) => {
    return <S.Input ref={ref} $isError={isError} {...props} />
  },
)

Input.displayName = 'Input'
