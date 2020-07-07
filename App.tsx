import React from 'react';
import Routes from './src/routes'
import {Provider} from 'react-native-paper'

const App:React.FC = ()=>{
  return (
    <Provider>
      <Routes/>
    </Provider>
  );
}

export default App

