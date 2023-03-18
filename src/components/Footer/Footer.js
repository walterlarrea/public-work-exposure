import {
  StyledFooter,
  StyledHr,
  StyledLogo,
  CopyrightParagraph,
  SocialLinksContainer
} from './Footer.style'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => (
  <StyledFooter>
    <StyledHr />
    <div>
      <StyledLogo />
    </div>
    <div>
      <CopyrightParagraph>
        ©
        2023
        - Designed and built by Walter Larrea
      </CopyrightParagraph>
    </div>
    <SocialLinksContainer>
      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/walter-larrea/' >
        <BsLinkedin title='https://www.linkedin.com/in/walter-larrea/' />
      </a>
      <a target='_blank' rel='noreferrer' href='https://github.com/walterlarrea'>
        <BsGithub title='https://github.com/walterlarrea' />
      </a>
    </SocialLinksContainer>
  </StyledFooter>
)

export default Footer