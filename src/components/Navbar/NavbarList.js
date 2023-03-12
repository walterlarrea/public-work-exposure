import { useContext } from 'react'
import { Link } from 'react-scroll'
import {
  BsToggle2Off,
  BsToggle2On,
  BsMoonFill,
  BsSunFill
} from 'react-icons/bs'
import ThemeContext from '../../ThemeContext'

const NavbarList = ({ scrollLinkIds, handleCloseMenu }) => {
  const [selectedTheme, dispatch] = useContext(ThemeContext)

  const handleToggleTheme = (newTheme) => {
    dispatch({ type: newTheme })
  }

  return (
    <>
      <li>
        <Link onClick={handleCloseMenu} activeClass="active" to={scrollLinkIds.home} spy={true} smooth={true} offset={-100} duration={500}>
          home
        </Link>
      </li>
      <li>
        <Link onClick={handleCloseMenu} to={scrollLinkIds.projects} spy={true} smooth={true} offset={-100} duration={500}>
          projects
        </Link>
      </li>
      <li>
        <Link onClick={handleCloseMenu} to={scrollLinkIds.contact} spy={true} smooth={true} offset={-100} duration={500}>
          contact
        </Link>
      </li>
      <li>
        <BsSunFill />
        {selectedTheme === 'dark'
          ?
          <BsToggle2On onClick={() => handleToggleTheme('LIGHT')} />
          :
          <BsToggle2Off onClick={() => handleToggleTheme('DARK')} />
        }
        <BsMoonFill />
      </li>
    </>
  )
}

export default NavbarList