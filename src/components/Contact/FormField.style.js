import styled from "styled-components";

export const StyledFormField = styled.div`
  background-color: rgba(0,0,0,0%);
  display: block;
  position: relative;

  label{
    font-size: 0.7em;
    color: #999;
    background: ${({ theme }) => theme[theme.selected].background};
    padding: 0 4px;
    position: absolute;
    top: 12px;
    left: 10px;
    text-align: start;
    transition: all 0.2s;
  }

  input{
    width: 100%;
    height: 100%;
    padding: 3px;
    font-size: 0.8em;
    color: ${({ theme }) => theme[theme.selected].textOnBackground};
    border: 1px solid;
    border-radius: 4px;
    background: ${({ theme }) => theme[theme.selected].background};

    &:focus{
      border-width: 2px;
      border-color: ${({ theme }) => theme[theme.selected].primary};

      +label{
        color: ${({ theme }) => theme[theme.selected].primary};
        top: -6px;
        font-size: 0.6em;
      }
    }
  }
`