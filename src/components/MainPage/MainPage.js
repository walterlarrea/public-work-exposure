import React from 'react'

import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'

const MainPage = () => {
  const smoothScrollIds = {
    home: 'home',
    about: 'about',
    skills: 'skills',
    projects: 'projects',
    contact: 'contact'
  }
  return (
    <>
      <Menu />
      <div className='responsive-container'>
        <Home id={smoothScrollIds.home} />
        <About id={smoothScrollIds.about} />
        <Skills id={smoothScrollIds.skills} />
        <Projects id={smoothScrollIds.projects} />
        <Contact id={smoothScrollIds.contact} />
        <Footer />
      </div>
    </>
  )
}

export default MainPage