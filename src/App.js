import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './App.styles'

import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'

import ThemeContext from './ThemeContext'
import themeJSON from './config/themeJSON'
//const themeJSON = require('./config/themeJSON.json')

function App() {
  const [selectedTheme, dispatch] = useContext(ThemeContext)

  const theme = { ...themeJSON, selected: selectedTheme }

  const smoothScrollIds = {
    about: 'about',
    projects: 'projects',
    contact: 'contact'
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar scrollLinkIds={smoothScrollIds} />
      <main>
        <About id={smoothScrollIds.about} />
        <Projects id={smoothScrollIds.projects} />
        <Contact id={smoothScrollIds.contact} />
      </main>
    </ThemeProvider>
  );
}

export default App;
