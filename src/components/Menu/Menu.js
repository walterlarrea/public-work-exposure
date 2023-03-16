import { React, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'

import {
  StyledHeader,
  StyledHomeLink,
  StyledNavbar,
  StyledBurgerIcon,
  SyledCrossIcon,
  StyledDropDownMenu
} from './Menu.style'

const Menu = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false)

  const dropDownMenu = useRef(null)

  const handleDropDownMenu = () => {
    if (dropDownOpen) {
      dropDownMenu.current.classList.remove('open')
      setDropDownOpen(false)
    } else {
      dropDownMenu.current.classList.add('open')
      setDropDownOpen(true)
    }
  }

  return (
    <StyledHeader>
      <StyledHomeLink to='/'>
        Walter.dev
      </StyledHomeLink>

      <nav>
        <StyledNavbar>
          <Navbar />
        </StyledNavbar>
        <StyledDropDownMenu ref={dropDownMenu} >
          <Navbar handleCloseMenu={handleDropDownMenu} />
        </StyledDropDownMenu>
      </nav>

      {dropDownOpen ?
        <SyledCrossIcon onClick={handleDropDownMenu} />
        :
        <StyledBurgerIcon onClick={handleDropDownMenu} />
      }

    </StyledHeader>
  )
}

export default Menu