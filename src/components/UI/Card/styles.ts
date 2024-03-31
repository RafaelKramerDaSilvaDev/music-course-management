import styled from 'styled-components'
import { colors } from '../../../styles/constants/colors'

export const Card = styled.div<{ $color: keyof typeof colors }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  min-width: 180px;

  border-color: ${({ $color }) => colors[$color]};
  border-style: solid;
  border-width: 1px;
  border-bottom-width: 4px;

  padding: 8px 16px;

  color: #484848;
`

export const Title = styled.span`
  color: #484848;
  text-align: right;
`

export const Content = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: #484848;
`
