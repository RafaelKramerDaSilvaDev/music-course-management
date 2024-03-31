import styled from 'styled-components'

export const Input = styled.input<{ $isError?: boolean }>`
  max-height: 32px;
  padding: 8px;

  border-style: solid;
  border-width: 1px 1px 2px 1px;
  border-color: ${({ $isError }) => {
    if ($isError) return '#DC3131'

    return '#484848'
  }};

  outline: none;
`
