import ContactForm from './ContactForm'

import { StyledH2 } from '../Main.style'
import { ContactIconsContainer } from './Contact.style'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Contact = ({ id }) => (
  <section id={id}>
    <StyledH2>CONTACT</StyledH2>

    <ContactIconsContainer>
      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/walter-larrea/' >
        <BsLinkedin title='https://www.linkedin.com/in/walter-larrea/' />
      </a>
      <a target='_blank' rel='noreferrer' href='https://github.com/walterlarrea'>
        <BsGithub title='https://github.com/walterlarrea' />
      </a>
    </ContactIconsContainer>

    <ContactForm />
  </section>
)

export default Contact