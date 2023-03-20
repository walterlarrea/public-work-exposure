import { StyledHomeLink } from "./HeaderLink.style"

const HeaderLink = ({ children, targetRoute }) => {

  return (
    <StyledHomeLink to={targetRoute}>
      {children}
      Walter.dev
    </StyledHomeLink>
  )
}

export default HeaderLink