import { StyledHomeLink, StyledLinkContainer } from "./HomeLink.style"
import { BsBoxArrowInLeft } from 'react-icons/bs'

const HomeLink = () => {

  return (
    <StyledLinkContainer>
      <StyledHomeLink to='/'>
        <BsBoxArrowInLeft />
        Walter.dev
      </StyledHomeLink>
    </StyledLinkContainer>
  )
}

export default HomeLink