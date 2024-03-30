import styled from 'styled-components'
import { TabColors } from './constants/tab-colors'

export const WrapperTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;

  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  display: flex;
  gap: 4px;
`

export const Tab = styled.div<{ $color: keyof typeof TabColors }>`
  border-color: ${({ $color }) => TabColors[$color]};
  border-style: solid;
  border-width: 1px;
  border-bottom-width: 4px;

  font-family: 'Inter', sans-serif;
  padding: 8px 16px;

  cursor: pointer;
`

export const Content = styled.div``
