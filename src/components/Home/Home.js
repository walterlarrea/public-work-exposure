import React from 'react'

import Presentation from '../Presentation/Presentation'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Menu from '../../components/Menu/Menu'

import { Container } from './Home.styles'

const Home = () => {
  const smoothScrollIds = {
    presentation: 'presentation',
    about: 'about',
    projects: 'projects',
    contact: 'contact'
  }
  return (
    <>
      <Menu />
      <Container>
        <Presentation id={smoothScrollIds.presentation} />
        <About id={smoothScrollIds.about} />
        <Projects id={smoothScrollIds.projects} />
        <Contact id={smoothScrollIds.contact} />
      </Container>
    </>
  )
}

export default Home