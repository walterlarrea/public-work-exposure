import styled from "styled-components"

export const GridContainer = styled.div`
  /* @media screen and (min-width: 640px){
    grid-template-columns: repeat(1, 1fr);
  } */
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
  /* @media screen and (min-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
  } */

  @media screen and (min-width: 1280px){
    grid-template-columns: repeat(3, 1fr);
  }

  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
`