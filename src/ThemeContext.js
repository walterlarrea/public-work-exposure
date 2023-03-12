import { createContext, useReducer } from "react";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return 'dark'
    case "LIGHT":
      return 'light'
    default:
      return state
  }
}

const ThemeContext = createContext()

export const ThemeContextProvider = (props) => {
  const [theme, themeDispatch] = useReducer(themeReducer, 'light')

  return (
    <ThemeContext.Provider value={[theme, themeDispatch]} >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext