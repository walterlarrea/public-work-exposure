import styled from 'styled-components'

export const StyledH2 = styled.h2`
  color: ${({ theme }) => theme[theme.selected].textOnBackground};
  font-size: 2.4rem;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding-top: 20px;
`

export const StyledHr = styled.hr`
  background-color: ${({ theme }) => theme[theme.selected].primary};
  height: 0.37rem;
  width: 10rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`