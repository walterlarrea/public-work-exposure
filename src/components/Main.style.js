import styled from 'styled-components'

export const StyledH2 = styled.h2`
  color: ${({ theme }) => theme[theme.selected].textOnBackground};
  text-align: center;
  margin-bottom: 40px;
  padding-top: 20px;
`