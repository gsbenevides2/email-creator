import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import TopAppBar from './components/TopAppBar'
import SendHtmlEmail from './pages/SendHtmlEmail'
import translations from './translations'

const Routes:React.FC = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        header: TopAppBar
      }}
    >
      <Stack.Screen
        name='SendHtmlEmail'
        options={{
          title: translations.translate('sendHtmlEmail.topAppBarTitle')
        }}
        component={SendHtmlEmail}/>
    </Stack.Navigator>
  )
}

export default Routes
