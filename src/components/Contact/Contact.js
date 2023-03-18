// import ContactForm from './ContactForm'

import { StyledSectionH2, StyledSectionHr } from '../Main.style'
import { ContactIconsContainer } from './Contact.style'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Contact = ({ id }) => (
  <section id={id}>
    <StyledSectionH2>Contact</StyledSectionH2>
    <StyledSectionHr />

    <ContactIconsContainer>
      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/walter-larrea/' >
        <BsLinkedin title='https://www.linkedin.com/in/walter-larrea/' />
      </a>
      <a target='_blank' rel='noreferrer' href='https://github.com/walterlarrea'>
        <BsGithub title='https://github.com/walterlarrea' />
      </a>
    </ContactIconsContainer>

    {/* <ContactForm /> */}
  </section>
)

export default Contact