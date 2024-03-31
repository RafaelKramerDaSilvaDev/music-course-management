import styled from 'styled-components'
import { colors } from '../../../styles/constants/colors'

export const Wrapper = styled.div<{ $color: keyof typeof colors }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 1000px;

  border-color: ${({ $color }) => colors[$color]};
  border-style: solid;
  border-width: 1px;
  border-bottom-width: 4px;

  padding: 16px 32px;
`
