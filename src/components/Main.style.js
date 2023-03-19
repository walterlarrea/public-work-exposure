import styled from 'styled-components'

export const StyledSectionH2 = styled.h2`
  color: ${({ theme }) => theme[theme.selected].textOnBackground};
  font-size: 2.4rem;
  text-align: left;
  margin-top: 3rem;
  padding-top: 0;
  margin-bottom: 0.5rem;
`

export const StyledSectionH3 = styled.h3`
  color: ${({ theme }) => theme[theme.selected].textOnBackground};
  font-size: 1.8rem;
  text-align: center;
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

export const StyledSecondaryHr = styled.hr`
  background-color: ${({ theme }) => theme[theme.selected].primary};
  position: relative;
  left: calc(50% - 4rem);
  border: 0;
  height: 0.37rem;
  width: 8rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`

export const ResponsiveContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 768px;
  }
   
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }

  @media screen and (min-width: 1536px) {
    max-width: 1536px;
  }

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`