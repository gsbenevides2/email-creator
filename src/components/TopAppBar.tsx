import React from 'react'
import {Appbar} from 'react-native-paper'
import {StatusBar} from 'expo-status-bar'
import {StackHeaderProps} from '@react-navigation/stack'

const TopAppBarComponent:React.FC<StackHeaderProps> = props=>{
  const {options} = props.scene.descriptor
  const {route} = props.scene

  const title = 
    options.title ||
    options.headerTitle ||
    route.name

  return (
    <>
      <StatusBar style='inverted'/>
      <Appbar.Header accessibilityStates={{}}>
        <Appbar.Content 
          accessibilityStates={{}} title={title}/>
      </Appbar.Header>
    </>
  )
}

export default TopAppBarComponent
