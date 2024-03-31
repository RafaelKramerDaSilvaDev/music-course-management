import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  border-color: #3175dc;
  border-style: solid;
  border-width: 1px;
  border-bottom-width: 4px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 32px;
`

export const WrapperActions = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  padding: 16px 32px;

  border-top: 1px solid #3175dc;
`
