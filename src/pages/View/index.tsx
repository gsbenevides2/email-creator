import React from 'react';
import styles from './styles'
import { View } from "react-native";
import { WebView } from 'react-native-webview'
import {useRoute, useNavigation} from '@react-navigation/native'
import {StackNavigationOptions} from '@react-navigation/stack'
import {IconButton} from 'react-native-paper'
import axios from 'axios'

interface Params {
  text:string
}

const ViewEmail:React.FC = ()=>{
  const [html, setHtml] = React.useState('')
  const route = useRoute()
  const navigation = useNavigation()
  const {text} = route.params as Params

  async function loadHtml(){
    const response = await axios({
      method:'POST',
      url:'https://api.github.com/markdown',
      data:{
        text
      },
      headers:{
        accept:'application/vnd.github.v3+json'
      }
    })
    const meta = '<meta name="viewport" content="width=device-width scale=1"/>'
    setHtml(meta+response.data)
  }
  function handleToSend(){
    navigation.navigate('Send',{html})
  }
  function setNavigationHeader(){
    const options:StackNavigationOptions = {
      headerRight:()=>(
        <IconButton
          accessibilityStates={{}}
          icon='send'
          color='#000'
          onPress={handleToSend}
          size={25}/>
        )
    }
    navigation.setOptions(options)
  }
  React.useEffect(()=>{
    loadHtml()
  })
  setNavigationHeader()
  return (
    <View style={styles.container}>
      <WebView
        source={{
          html
        }}
      />
    </View>
  );
}

export default ViewEmail
