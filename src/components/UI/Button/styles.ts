import styled from 'styled-components'

export const Button = styled.button`
  border-style: solid;
  border-width: 1px 1px 2px 1px;
  background-color: white;

  padding: 4px 16px;

  cursor: pointer;

  &:active {
    border-bottom-width: 1px;
  }
`
