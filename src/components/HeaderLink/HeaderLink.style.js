import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledHomeLink = styled(Link)`
  @media screen and (min-width: 768px) {
    width: 220px;
  }

  background-color: ${({ theme }) => theme[theme.selected].surface};
  color: ${({ theme }) => theme[theme.selected].textOnSurface};
  height: 60px;
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 800;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 0 40px 40px 0;

  /* &:hover{
    color: ${({ theme }) => theme[theme.selected].secondary};
  } */

  svg{    
    color: ${({ theme }) => theme[theme.selected].primary};
    font-size: 1.4em;
    height: auto;
  }
`