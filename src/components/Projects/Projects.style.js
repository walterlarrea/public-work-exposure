import styled from "styled-components"

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  >div:nth-child(odd) {
    @media screen and (min-width: 992px) {
      flex-direction: row-reverse;
    }
  }
`