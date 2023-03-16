import { useContext } from 'react'
import { Link as Scroll } from 'react-scroll'
// import { Link } from 'react-router-dom'
import ThemeContext from '../../ThemeContext'
import {
  BsToggle2Off,
  BsToggle2On,
  BsMoonFill,
  BsSunFill
} from 'react-icons/bs'

const NavbarList = ({ scrollLinkIds, handleCloseMenu }) => {
  const [selectedTheme, dispatch] = useContext(ThemeContext)

  const handleToggleTheme = (newTheme) => {
    dispatch({ type: newTheme })
  }

  return (
    <>
      <li>
        <Scroll onClick={handleCloseMenu} activeClass="active" to={scrollLinkIds.about} spy={true} smooth={true} offset={-100} duration={500}>about</Scroll>
        {/* <Link to='/'>about</Link> */}
      </li>
      <li>
        <Scroll onClick={handleCloseMenu} to={scrollLinkIds.projects} spy={true} smooth={true} offset={-100} duration={500}>projects</Scroll>
        {/* <Link to='/projects'>projects</Link> */}
      </li>
      <li>
        <Scroll onClick={handleCloseMenu} to={scrollLinkIds.contact} spy={true} smooth={true} offset={-100} duration={500}>contact</Scroll>
        {/* <Link to='/contact'>contact</Link> */}
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