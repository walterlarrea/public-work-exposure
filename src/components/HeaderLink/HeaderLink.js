import { StyledHomeLink } from "./HeaderLink.style"

const HeaderLink = ({ children }) => {

  return (
    <StyledHomeLink to='/'>
      {children}
      Walter.dev
    </StyledHomeLink>
  )
}

export default HeaderLink