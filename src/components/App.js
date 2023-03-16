import { Routes, Route, useMatch, } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './AppGlobals.styles'

import { useThemeValue } from '../ThemeContext'
import themeConfiguration from '../config/themeJSON'
import projectListData from '../config/projectListJSON.json'

import Home from './Home/Home'
import ProjectContainer from './ProjectContainer/ProjectContainer'

function App() {
  const selectedTheme = useThemeValue()

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
    </ThemeProvider>
  );
}

export default App;
