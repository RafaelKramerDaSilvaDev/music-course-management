import { RegisterProps } from '../../../../utils/useForm'
import { Input } from '../../Input'
import * as S from './styles'

type InputFieldProps = RegisterProps & {
  label: string
  placeholder?: string
  helpText?: string
}

export const InputField = ({
  label,
  placeholder,
  helpText,
  isError,
  customErrorMessage,
  isRequired,
  onChange,
  value,
}: InputFieldProps) => {
  const defaultErrorMessage = `Campo: ${label}, está incorreto.`

  return (
    <S.Wrapper>
      <S.Label>
        {isRequired && <span>*</span>}
        {label}
      </S.Label>
      <Input
        placeholder={placeholder ?? label}
        onChange={onChange}
        value={value}
        isError={isError}
      />
      {helpText && <S.HelpText>{helpText}</S.HelpText>}
      {isError && (
        <S.ErrorMessage>
          {customErrorMessage ?? defaultErrorMessage}
        </S.ErrorMessage>
      )}
    </S.Wrapper>
  )
}
