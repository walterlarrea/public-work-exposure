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
        <Link onClick={handleCloseMenu} activeClass="active" to={scrollLinkIds.about} spy={true} smooth={true} offset={-100} duration={500}>
          about
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
          <BsToggle2On style={{ fontSize: '25px' }} onClick={() => handleToggleTheme('LIGHT')} />
          :
          <BsToggle2Off style={{ fontSize: '25px' }} onClick={() => handleToggleTheme('DARK')} />
        }
        <BsMoonFill />
      </li>
    </>
  )
}

export default NavbarList