import styled from "styled-components";

export const StyledMainElement = styled.main`
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;

`

export const Container = styled.div`
  width: 100%;
`

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme[theme.selected].primary};
  font-size: 1.2rem;
  font-weight: 600;
`

export const StyledH1 = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 3.6rem;
  }

  color: ${({ theme }) => theme[theme.selected].textOnBackground};
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 1rem;
`

export const StyledH2 = styled.h2`
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  color: ${({ theme }) => theme[theme.selected].textOnBackground};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const StyledP = styled.p`
  color: ${({ theme }) => theme[theme.selected].textOnBackground.slice(0, -2)}${'0.8)'};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-right: 2rem;
`