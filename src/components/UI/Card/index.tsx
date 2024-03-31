import { colors } from '../../../styles/constants/colors'
import * as S from './styles'

type CardProps = {
  title: string
  content: string | number
  color?: keyof typeof colors
}

export const Card = ({ title, content, color = 'blue' }: CardProps) => {
  return (
    <S.Card $color={color}>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Card>
  )
}
