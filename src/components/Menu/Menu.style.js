import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme[theme.selected].surface};
  height: 3rem;
  position: sticky;
  top: 0;
  z-index: 2;
  
  .responsive-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const StyledBurgerIcon = styled(RxHamburgerMenu)`
  @media screen and (min-width: 768px) {
    display: none;
  }

  color: ${({ theme }) => theme[theme.selected].textOnSurface};
  display: inline-block;
  height: 1.5em;
  margin-right: 15px;
  width: auto;
`
export const SyledCrossIcon = styled(RxCross1)`
  @media screen and (min-width: 768px) {
    display: none
  }

  color: ${({ theme }) => theme[theme.selected].textOnSurface};
  display: inline-block;
  height: 1.5em;
  margin-right: 15px;
  width: auto;
`

export const StyledNavbar = styled.div`
  @media screen and (min-width: 768px) {
    display: block;
  }
  display: none;
`

export const StyledDropDownMenu = styled.div`
  @media screen and (min-width: 768px) {
    display: none
  }
  
    position: absolute;
    top: 3rem;
    right: 0;
    height: auto;
    width: 0;
    background-color: ${({ theme }) => theme[theme.selected].surface};
    backdrop-filter: blur(15px);
    overflow: hidden;
    transition: width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &.open{
    width: 300px;
  }

  li{
    padding: 0.7rem;
  }
  ul{
    flex-direction: column;
  }
`

export const StyledHomeLink = styled(Link)`
  @media screen and (min-width: 768px) {
    width: 220px;
    font-size: 1.2em;
  }

  background-color: ${({ theme }) => theme[theme.selected].surface};
  color: ${({ theme }) => theme[theme.selected].primary};
  height: 3rem;
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