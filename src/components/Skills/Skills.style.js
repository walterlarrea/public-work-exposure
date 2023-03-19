import styled from "styled-components";

export const GridContainer = styled.div`
  @media screen and (min-width: 640px){
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(9, 1fr);
  }

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  
  svg{
    width: auto;
    height: 4rem;
  }
  path{
    color: ${({ theme }) => theme[theme.selected].textOnBackground.slice(0, -2)}${'0.8)'};
    fill: currentColor;
  }
  g{
    color: ${({ theme }) => theme[theme.selected].textOnBackground.slice(0, -2)}${'0.8)'};
    fill: currentColor;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p{
    font-size: 0.8rem;
    font-weight: 800;
    padding: 10px 0;
    margin: 0;
  }
`