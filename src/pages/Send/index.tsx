import React from 'react';
import styles from './styles'
import { View, Text } from "react-native";
import {TextInput, FAB} from 'react-native-paper'
import { useRoute } from "@react-navigation/native";
import { WebView } from 'react-native-webview'
import * as utils from './utils'

interface Params {
  html:string
}

const Send:React.FC = ()=>{
  const route = useRoute()
  const {html} = route.params as Params
  const [recipientEmail ,setRecipientEmail] = React.useState<string>('')
  const [emailSubject, setEmailSubject] = React.useState<string>('')

  function handleSendMessage(){

  }
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setRecipientEmail}
        autoCompleteType='email'
        keyboardType='email-address'
        style={styles.textInput}
        accessibilityStates={{}}
        label='Endereço de email do destinatario:'
      />
      <TextInput
        onChangeText={setEmailSubject}
        style={styles.textInput}
        accessibilityStates={{}}
        label='Assunto do email:'
      />
      <WebView
        source={{html}}
      />
      <FAB
        onPress={utils.authenticate}
        style={styles.fab}
        accessibilityStates={{}}
        icon='send'
      />
    </View>
  );
}

export default Send
