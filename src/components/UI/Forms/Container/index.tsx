import { FormHTMLAttributes } from 'react'
import * as S from './styles'
import { Button } from '../../Button'

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  actions?: {
    label: string
    onClick?: () => void
    type?: 'submit' | 'reset'
  }[]
  reset: () => void
}

export const ContainerForms = ({
  children,
  actions,
  reset,
  ...props
}: FormProps) => {
  return (
    <S.Form {...props}>
      <S.Content>{children}</S.Content>

      <S.WrapperActions>
        {actions && (
          <>
            {actions.map(({ label, onClick, type }) => {
              return (
                <Button
                  key={label}
                  onClick={type === 'reset' ? reset : onClick}
                  type={type === 'submit' ? 'submit' : 'button'}
                >
                  {label}
                </Button>
              )
            })}
          </>
        )}
      </S.WrapperActions>
    </S.Form>
  )
}
