import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: hsl(265, 100%, 47%); 
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily}, sans-serif;
    font-size: 20px;
  }

  body {
    background-color: ${({ theme }) => theme[theme.selected].background};
    color: ${({ theme }) => theme[theme.selected].text}
  }

  p {
    color: ${({ theme }) => theme[theme.selected].textOnBackground};
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .responsive-container {
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
  }
`