import { ReactNode } from 'react'
import * as S from './styles'

type GroupProps = {
  children: ReactNode
  title: string
}

export const Group = ({ children, title }: GroupProps) => {
  return (
    <S.Group>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Group>
  )
}
