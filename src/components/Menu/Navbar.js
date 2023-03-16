import { React, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../../images/vecteezy_portfolio-icon-shadowed-detailed-portfolio-logo_.png'
import NavbarList from './NavbarList'

import {
  StyledHeader,
  // StyledLogo,
  StyledHomeLink,
  StyledNavList,
  StyledBurgerIcon,
  SyledCrossIcon,
  StyledDropDownMenu
} from './Navbar.style'


const Navbar = ({ scrollLinkIds }) => {
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
      {/* <Link to='/'> */}
      {/* <StyledLogo src={logo} alt='portfolio icon shadowed detailed portfolio logo made by Vecteezy.com' /> */}
      <StyledHomeLink to='/'>
        Walter.dev
      </StyledHomeLink>
      {/* </Link> */}
      <nav>
        <StyledNavList>
          <NavbarList scrollLinkIds={scrollLinkIds} />
        </StyledNavList>
      </nav>

      <StyledDropDownMenu>
        <div ref={dropDownMenu} >
          <NavbarList handleCloseMenu={handleDropDownMenu} scrollLinkIds={scrollLinkIds} />
        </div>
      </StyledDropDownMenu>

      {dropDownOpen ?
        <SyledCrossIcon onClick={handleDropDownMenu} />
        :
        <StyledBurgerIcon onClick={handleDropDownMenu} />
      }

    </StyledHeader>
  )
}

export default Navbar