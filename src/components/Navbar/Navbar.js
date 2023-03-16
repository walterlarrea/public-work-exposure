import { Link as Scroll } from 'react-scroll'

import { useThemeValue, useThemeDispatch } from '../../ThemeContext'
import { StyledNavList, SunnyIcon, MoonIcon } from './Navbar.style'

const Navbar = ({ handleCloseMenu }) => {
  const selectedTheme = useThemeValue()
  const dispatch = useThemeDispatch()

  const handleToggleTheme = (newTheme) => {
    dispatch({ type: newTheme })
  }

  return (
    <StyledNavList>
      <li>
        <Scroll onClick={handleCloseMenu} activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500}>about</Scroll>
      </li>
      <li>
        <Scroll onClick={handleCloseMenu} to='projects' spy={true} smooth={true} offset={-100} duration={500}>projects</Scroll>
      </li>
      <li>
        <Scroll onClick={handleCloseMenu} to='contact' spy={true} smooth={true} offset={-100} duration={500}>contact</Scroll>
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