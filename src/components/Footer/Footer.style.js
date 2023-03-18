import styled from "styled-components";
import { AiOutlineCode } from 'react-icons/ai'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme[theme.selected].background};
  padding: 4rem 0;
`

export const StyledHr = styled.hr`
  background-color: ${({ theme }) => theme[theme.selected].textOnBackground.slice(0, -2)}${'0.15)'};
  border: 0;
  height: 0.2rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 4rem;
`

export const StyledLogo = styled(AiOutlineCode)`
  color: ${({ theme }) => theme[theme.selected].primary};
  width: auto;
  height: 2rem;
  margin-bottom: 1rem;
`

export const CopyrightParagraph = styled.p`
  color: ${({ theme }) => theme[theme.selected].textOnBackground.slice(0, -2)}${'0.5)'};
  width: auto;
  margin-bottom: 1rem;
  font-family: 'acumin-pro', sans-serif;
`

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  a{
    margin-right: 1rem;
  }

  svg{
    color: ${({ theme }) => theme[theme.selected].textOnBackground};
    font-size: 1.5rem;
  }
`