import React from 'react';
import Routes from './src/routes'
import {ThemeProvider} from './src/theme'

const App:React.FC = ()=>{
  return (
    <ThemeProvider>
      <Routes/>
    </ThemeProvider>
  );
}

export default App

