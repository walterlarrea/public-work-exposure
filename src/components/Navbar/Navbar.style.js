import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.selected === 'light' ? theme[theme.selected].primary : theme[theme.selected].surface};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 5px 10%;
  position: sticky;
  top: 0;
  /* background: linear-gradient(to bottom, ${({ theme }) => theme[theme.selected].primaryDark}, 75%, transparent) */
`

export const StyledBurgerMenu = styled(GiHamburgerMenu)`
  @media screen and (min-width: 768px) {
    display: none
  }

  display: inline-block;
  height: 40px;
  width: auto;
`

export const StyledDropDownMenu = styled.div`
  @media screen and (min-width: 768px) {
    display: none
  }

  div{
    position: absolute;
    top: 85px;
    right: 0;
    height: auto;
    width: 0;
    background-color: ${({ theme }) => theme.selected === 'light' ? theme[theme.selected].primary : theme[theme.selected].surface};
    backdrop-filter: blur(15px);
    overflow: hidden;
    transition: width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  div.open{
    width: 300px;
  }

  li{
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li a{
    font-weight: 700;
    color: ${({ theme }) => theme[theme.selected] === 'light' ? theme.light.textOnPrimary : theme.dark.textOnSurface};
    text-decoration: none;

    &:hover{
      color: ${({ theme }) => theme[theme.selected].secondary};
    }
  }
  a.active{
    color: ${({ theme }) => theme[theme.selected].secondary};
  }
  svg{  
    vertical-align: middle;
    color: ${({ theme }) => theme[theme.selected] === 'light' ? theme.light.textOnPrimary : theme.dark.textOnSurface};
    margin: 0 5px;
  }
`

export const StyledLogo = styled.img`
  &:hover {
    transform: scale(1.2);
  }

  height: 70px;
  width: auto;
  transition: all 0.3s;
`

export const StyledNavList = styled.ul`
  @media screen and (max-width: 768px) {
    display: none
  }

  list-style: none;

  li{
    display: inline-block;
    padding: 0 20px;
    
    &:hover{
      transform: scale(1.1);
    }
  }

  li a{
    font-weight: 700;
    color: ${({ theme }) => theme[theme.selected] === 'light' ? theme.light.textOnPrimary : theme.dark.textOnSurface};
    text-decoration: none;

    &:hover{
      color: ${({ theme }) => theme[theme.selected].secondary};
    }
  }
  a.active{
    color: ${({ theme }) => theme[theme.selected].secondary};
  }
  svg{  
    vertical-align: middle;
    color: ${({ theme }) => theme[theme.selected] === 'light' ? theme.light.textOnPrimary : theme.dark.textOnSurface};
    margin: 0 5px;
  }
`

export const StyledNavButton = styled.button`
  font-weight: 700;
  color: ${({ theme }) => theme[theme.selected].textOnPrimary}; 
  padding: 9px 25px;
  /* background: ${({ theme }) => theme[theme.selected].primaryVariant}; */
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3 ease 0s;

  &:hover{
    color: ${({ theme }) => theme[theme.selected].secondary};
    transform: scale(1.1)
  }
`
