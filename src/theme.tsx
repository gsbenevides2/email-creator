import React,{Dispatch, SetStateAction} from 'react'
import {
  Provider,
  DefaultTheme as DefaultPaperTheme,
  DarkTheme as DarkPaperTheme,
  Theme as PaperTheme
} from 'react-native-paper'
import {
  NavigationContainer,
  DefaultTheme as DefaultNavigationTheme,
  DarkTheme as DarkNavigationTheme,
  Theme as NavigationTheme
} from '@react-navigation/native'
import { AsyncStorage } from "react-native";

interface Context {
  theme:boolean;
  setTheme:Dispatch<SetStateAction<boolean>>
}

const defaultNavigationTheme:NavigationTheme = DefaultNavigationTheme
const defaultPaperTheme:PaperTheme = DefaultPaperTheme

const darkNavigationTheme:NavigationTheme = DarkNavigationTheme
const darkPaperTheme:PaperTheme = DarkPaperTheme

defaultPaperTheme.colors.primary = '#8e24aa'
defaultPaperTheme.colors.accent = '#8e24aa'

defaultNavigationTheme.colors.primary = '#8e24aa'

darkPaperTheme.colors.primary = '#c158dc'
darkPaperTheme.colors.accent = '#c158dc'

darkNavigationTheme.colors.primary = '#c158dc'

const ThemeContext = React.createContext<Context>({
  theme:false,
  setTheme:()=>{}
})


export const ThemeProvider:React.FC = props=>{
  const [theme, setTheme] = React.useState<boolean>(false)

  async function load(){
    const data = await AsyncStorage.getItem('darkMode')
    if(data === 'true') setTheme(true)
  }

  React.useEffect(()=>{
    load()
  })

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Provider theme={theme ? darkPaperTheme : defaultPaperTheme}>
        <NavigationContainer theme={theme ? darkNavigationTheme : defaultNavigationTheme}>
          {props.children}
        </NavigationContainer>
      </Provider>
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  const Context = React.useContext(ThemeContext)
  function toogle(){
    const newTheme = !Context.theme

    AsyncStorage.setItem('darkMode',String(newTheme))
    Context.setTheme(newTheme)
  }
  return {toogle}
}
