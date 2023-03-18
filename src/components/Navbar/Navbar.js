import { Link as Scroll } from 'react-scroll'

import { useThemeValue, useThemeDispatch } from '../../ThemeContext'
import { StyledNavList, SunnyIcon, MoonIcon } from './Navbar.style'

const Navbar = ({ handleCloseMenu }) => {
  const selectedTheme = useThemeValue()
  const dispatch = useThemeDispatch()

  const smoothScrollIds = {
    presentation: 'presentation',
    about: 'about',
    projects: 'projects',
    contact: 'contact'
  }

  const handleToggleTheme = (newTheme) => {
    dispatch({ type: newTheme })
    handleCloseMenu()
  }

  return (
    <StyledNavList>
      <li>
        <Scroll onClick={handleCloseMenu} activeClass="active" to={smoothScrollIds.presentation} spy={true} smooth={true} offset={-60} duration={500}>home</Scroll>
      </li>
      <li>
        <Scroll onClick={handleCloseMenu} to={smoothScrollIds.about} spy={true} smooth={true} offset={-60} duration={500}>about</Scroll>
      </li>
      <li>
        <Scroll onClick={handleCloseMenu} to={smoothScrollIds.projects} spy={true} smooth={true} offset={-60} duration={500}>projects</Scroll>
      </li>
      <li>
        <Scroll onClick={handleCloseMenu} to={smoothScrollIds.contact} spy={true} smooth={true} offset={-60} duration={500}>contact</Scroll>
      </li>
      <li>
        {selectedTheme === 'dark'
          ?
          <MoonIcon onClick={() => handleToggleTheme('LIGHT')} />
          :
          <SunnyIcon onClick={() => handleToggleTheme('DARK')} />
        }
      </li>
    </StyledNavList>
  )
}

export default Navbar