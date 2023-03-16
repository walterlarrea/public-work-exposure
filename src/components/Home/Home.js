import React from 'react'

import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Menu from '../../components/Menu/Menu'

import { Container } from './Home.styles'

const Home = () => {
  const smoothScrollIds = {
    about: 'about',
    projects: 'projects',
    contact: 'contact'
  }
  return (
    <>
      <Menu />
      <main>
        {/* <Container> */}
        <About id={smoothScrollIds.about} />
        <Projects id={smoothScrollIds.projects} />
        <Contact id={smoothScrollIds.contact} />
        {/* </Container> */}
      </main>
    </>
  )
}

export default Home