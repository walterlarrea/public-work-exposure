import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme[theme.selected].surface};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: sticky;
  top: 0;
`

export const StyledBurgerIcon = styled(RxHamburgerMenu)`
  @media screen and (min-width: 768px) {
    display: none
  }

  color: ${({ theme }) => theme.selected === 'light' ? theme.light.primary : theme.dark.textOnSurface};
  display: inline-block;
  height: 40px;
  margin-right: 15px;
  width: auto;
`
export const SyledCrossIcon = styled(RxCross1)`
  @media screen and (min-width: 768px) {
    display: none
  }

  color: ${({ theme }) => theme.selected === 'light' ? theme.light.primary : theme.dark.textOnSurface};
  display: inline-block;
  height: 40px;
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
    top: 60px;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const StyledHomeLink = styled(Link)`
  @media screen and (min-width: 768px) {
    width: 220px;
    font-size: 1.2em;
  }

  background-color: ${({ theme }) => theme[theme.selected].surface};
  color: ${({ theme }) => theme[theme.selected].primary};
  height: 60px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 22px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1em;
  border-radius: 0 40px 40px 0;
`
