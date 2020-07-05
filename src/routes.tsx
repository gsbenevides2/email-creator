import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 

import Editor from './pages/Editor'
import View from './pages/View'
import Send from './pages/Send'

const Routes:React.FC = ()=>{
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Editor'
          component={Editor}/>
        <Stack.Screen
          name='View'
          component={View}/>
        <Stack.Screen
          name='Send'
          component={Send}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

