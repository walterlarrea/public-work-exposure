import styled from 'styled-components'

import { MdOutlineWbSunny } from 'react-icons/md'
import { HiOutlineMoon } from 'react-icons/hi'

export const SunnyIcon = styled(MdOutlineWbSunny)`
  width: 1.2em;
  height: auto;
`

export const MoonIcon = styled(HiOutlineMoon)`
  width: 1.2em;
  height: auto;
`

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li{
    display: inline-block;
    padding-right: 20px;
  }

  li a{
    font-weight: 700;
    color: ${({ theme }) => theme[theme.selected].textOnSurface.slice(0, -2)}${'0.5)'};
    text-decoration: none;
    border-bottom: 2.5px ${({ theme }) => theme[theme.selected].primary};
    border-bottom-style: none;
    transition: all 0.15s;

    &:hover{
      color: ${({ theme }) => theme[theme.selected].textOnSurface};
    }
  }
  a.active{
    border-bottom-style: solid;
    color: ${({ theme }) => theme[theme.selected].textOnSurface};
  }
  svg{  
    vertical-align: middle;
    color: ${({ theme }) => theme[theme.selected].textOnSurface.slice(0, -2)}${'0.5)'};
    margin: 0 5px;

    &:hover{
      color: ${({ theme }) => theme[theme.selected].textOnSurface};
    }
  }
`