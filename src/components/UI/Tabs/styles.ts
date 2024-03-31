import styled from 'styled-components'
import { colors } from '../../../styles/constants/colors'

export const WrapperTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  width: 100%;
  height: 100%;

  color: #484848;
`

export const Header = styled.header`
  display: flex;
  gap: 4px;
`

export const Tab = styled.div<{ $color: keyof typeof colors }>`
  border-color: ${({ $color }) => colors[$color]};
  border-style: solid;
  border-width: 1px;
  border-bottom-width: 4px;

  padding: 8px 16px;

  cursor: pointer;
  user-select: none;
`

export const Content = styled.div``
