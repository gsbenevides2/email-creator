import * as React from 'react'

const ThemeContext = React.createContext()

const ThemeProvider:React.FC = props=>{
  return (
    <ThemeContext.Provider>
      {props.children}
    </ThemeContext.Provider>
  )
}
export ThemeProvider

export function toogleTheme(){
  const Context = React.useContext(ThemeContext)

  return function ()
  
}
