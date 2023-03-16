import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLinkContainer = styled.div`
  position: absolute;
  width: auto;
`

export const StyledHomeLink = styled(Link)`
  @media screen and (min-width: 768px) {
    width: 220px;
    font-size: 1.2em;
  }

  background-color: ${({ theme }) => theme[theme.selected].surface};
  color: ${({ theme }) => theme.selected === 'light' ? theme.light.primary : theme.dark.textOnSurface};
  height: 60px;
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  text-decoration: none;
  font-size: 1em;
  border-radius: 0 40px 40px 0;

  &:hover{
    color: ${({ theme }) => theme[theme.selected].secondary};
  }

  svg{
    @media screen and (min-width: 768px) {
      font-size: 1.4em;
    }
    
    width: 1.2em;
    height: auto;
  }
`