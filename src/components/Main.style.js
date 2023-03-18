import styled from 'styled-components'

export const StyledSectionH2 = styled.h2`
  color: ${({ theme }) => theme[theme.selected].textOnBackground};
  font-size: 2.4rem;
  text-align: left;
  margin-top: 3rem;
  padding-top: 0;
  margin-bottom: 0.5rem;
`

export const StyledSectionHr = styled.hr`
  background-color: ${({ theme }) => theme[theme.selected].primary};
  border: 0;
  height: 0.37rem;
  width: 8rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`