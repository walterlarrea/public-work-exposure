import React, { useContext, useRef } from 'react'
import {
  Routes,
  Route,
  useMatch,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './App.styles'

import ThemeContext from './ThemeContext'
import themeConfiguration from './config/themeJSON'
import projectListData from './config/projectListJSON.json'

import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import ProjectContainer from './components/Projects/ProjectContainer'

function App() {
  const [selectedTheme, dispatch] = useContext(ThemeContext)

  const theme = { ...themeConfiguration, selected: selectedTheme }

  const smoothScrollIds = {
    about: 'about',
    projects: 'projects',
    contact: 'contact'
  }

  const match = useMatch('/project/:id')
  const project = match
    ? projectListData.find(p => p.id === Number(match.params.id))
    : null

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar scrollLinkIds={smoothScrollIds} />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <About id={smoothScrollIds.about} />
              <Projects id={smoothScrollIds.projects} />
              <Contact id={smoothScrollIds.contact} />
            </>
          } />
          <Route path="/project/:id" element={<ProjectContainer project={project} />} />
        </Routes>

      </main>
    </ThemeProvider>
  );
}

export default App;
