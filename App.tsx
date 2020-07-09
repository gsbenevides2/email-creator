import React from 'react'

import expoConstants from 'expo-constants'

import Routes from './src/routes'
import { ThemeProvider } from './src/theme'

const App:React.FC = () => {
  console.log(expoConstants.manifest)
  return (
    <ThemeProvider>
      <Routes/>
    </ThemeProvider>
  )
}

export default App
