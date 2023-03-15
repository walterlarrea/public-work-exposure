import { React, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import logo from '../../images/vecteezy_portfolio-icon-shadowed-detailed-portfolio-logo_.png'
import {
  StyledHeader,
  StyledLogo,
  StyledNavList,
  StyledBurgerMenu,
  StyledDropDownMenu
} from './Navbar.style'

import NavbarList from './NavbarList'

const Navbar = ({ scrollLinkIds }) => {
  const dropDownMenu = useRef(null)

  const handleDropDownMenu = () => {
    dropDownMenu.current.classList.toggle('open')
  }

  const handleCloseDropDownMenu = () => {
    dropDownMenu.current.classList.toggle('open')
  }

  return (
    <StyledHeader>
      {/* <Link style={{ height: 70 }} to={scrollLinkIds.about} spy={true} smooth={true} offset={-100} duration={500}> */}
      <RouterLink to='/'>
        <StyledLogo src={logo} alt='portfolio icon shadowed detailed portfolio logo made by Vecteezy.com' />
      </RouterLink>
      {/* </Link> */}
      <nav>
        <StyledNavList>
          <NavbarList scrollLinkIds={scrollLinkIds} />
        </StyledNavList>
      </nav>

      <StyledDropDownMenu>
        <div ref={dropDownMenu} >
          <NavbarList handleCloseMenu={handleCloseDropDownMenu} scrollLinkIds={scrollLinkIds} />
        </div>
      </StyledDropDownMenu>

      <StyledBurgerMenu onClick={handleDropDownMenu} />

    </StyledHeader>
  )
}

export default Navbar