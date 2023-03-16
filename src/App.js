import React, { useContext } from 'react'
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

import Home from './components/Home/Home'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'

function App() {
  const [selectedTheme, dispatch] = useContext(ThemeContext)

  const theme = { ...themeConfiguration, selected: selectedTheme }

  const match = useMatch('/projects/:id')
  const project = match
    ? projectListData.find(p => p.id === Number(match.params.id))
    : null

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects/:id" element={<ProjectContainer project={project} />} />
      </Routes>

      {/*<Navbar scrollLinkIds={smoothScrollIds} />
       <main>
        <Routes>
          <Route path="/" element={
            <>
              <About id={smoothScrollIds.about} />
              <Projects id={smoothScrollIds.projects} />
              <Contact id={smoothScrollIds.contact} />
            </>
          } />
          <Route path="/projects/:id" element={<ProjectContainer project={project} />} />
        </Routes>
      </main> */}
    </ThemeProvider>
  );
}

export default App;
