import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './App.styles'

import Home from './components/Home'
import About from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar/Navbar'

import ThemeContext from './ThemeContext'

function App() {
  const [selectedTheme, dispatch] = useContext(ThemeContext)

  const theme = {
    dark: {
      primary: 'hsla(44, 97%, 56%, 1)',
      primaryDark: 'hsla(40, 93%, 54%, 1)',
      secondary: 'hsla(202, 38%, 40%, 1)',
      secondaryLight: 'hsla(201, 21%, 49%, 1)',
      secondaryDark: 'hsla(206, 88%, 13%, 1)',
      text: 'hsla(40, 93%, 90%, 1)',
      background: 'hsla(206, 88%, 6%, 1)',
    },
    light: {
      primary: 'hsla(44, 97%, 76%, 1)',
      primaryDark: 'hsla(40, 93%, 54%, 1)',
      secondary: 'hsla(202, 38%, 60%, 1)',
      secondaryLight: 'hsla(201, 21%, 69%, 1)',
      secondaryDark: 'hsla(206, 88%, 33%, 1)',
      text: 'hsla(206, 88%, 6%, 1)',
      background: 'hsla(40, 93%, 90%, 1)'
    },
    fontFamily: 'Red Hat Display',
    selected: selectedTheme
  }

  const smoothScrollIds = {
    home: 'home',
    projects: 'projects',
    contact: 'contact'
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Navbar scrollLinkIds={smoothScrollIds} />
        <Home id={smoothScrollIds.home} />
        <About id={smoothScrollIds.projects} />
        <Contact id={smoothScrollIds.contact} />
      </main>
    </ThemeProvider>
  );
}

export default App;
