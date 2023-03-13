import styled from "styled-components";

export const StyledContactForm = styled.form`
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  display: grid;
  grid-template-rows: 2em 2em 4em 3em;
  grid-template-columns: auto 1fr auto;
  gap: 15px 15px;
  width: 100%;
  padding: 0px;
  margin-bottom: 20px;

  div{
    grid-column-start: 2;
    grid-column-end: 3;
  }
`

export const FormButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5px 0;

  button{
    color: ${({ theme }) => theme[theme.selected].secondary};
    width: 120px;
    border-radius: 20px;
    border: none;
    font-weight: 600;
      
  }
  button#send{
    background-color: ${({ theme }) => theme[theme.selected].secondary};
    color: ${({ theme }) => theme[theme.selected].textOnSecondary};
  }
  button#reset{

  }
`

export const StyledH3 = styled.h3`
  color: ${({ theme }) => theme[theme.selected].textOnSurface};
  text-align: center;
  margin: 20px;
`