import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
`