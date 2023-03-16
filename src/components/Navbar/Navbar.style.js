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

  li{
    display: inline-block;
    padding: 0 20px;
    
    &:hover{
      transform: scale(1.1);
    }
  }

  li a{
    font-weight: 700;
    color: ${({ theme }) => theme[theme.selected].textOnSurface};
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
    color: ${({ theme }) => theme[theme.selected].textOnSurface};
    margin: 0 5px;
  }
`