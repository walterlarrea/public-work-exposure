import React from 'react'

import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  const smoothScrollIds = {
    about: 'about',
    projects: 'projects',
    contact: 'contact'
  }
  return (
    <>
      <Navbar scrollLinkIds={smoothScrollIds} />
      <main>
        <About id={smoothScrollIds.about} />
        <Projects id={smoothScrollIds.projects} />
        <Contact id={smoothScrollIds.contact} />
      </main>
    </>
  )
}

export default Home