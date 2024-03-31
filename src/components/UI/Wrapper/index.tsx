import { ReactNode } from 'react'
import * as S from './styles'
import { colors } from '../../../styles/constants/colors'

type WrapperProps = {
  children: ReactNode
  color?: keyof typeof colors
}

export const Wrapper = ({ children, color = 'blue' }: WrapperProps) => {
  return <S.Wrapper $color={color}>{children}</S.Wrapper>
}
