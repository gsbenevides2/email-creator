import React from 'react'
import { View, Keyboard } from 'react-native'
import { TextInput, FAB, Button } from 'react-native-paper'
import { WebView } from 'react-native-webview'

import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'

import Alert from '../../components/Alert'
import Loading from '../../components/Loading'
import translations from '../../translations'
import styles from './styles'
import * as utils from './utils'

interface Params {
  html:string
}

interface AlertState {
  title:string;
  content:string;
  open:boolean;
}
const Send:React.FC = () => {
  const [recipientEmail, setRecipientEmail] = React.useState<string>('')
  const [emailSubject, setEmailSubject] = React.useState<string>('')
  const [alert, setAlert] = React.useState<AlertState>({
    content: '',
    open: false,
    title: ''
  })
  const [loading, setLoading] = React.useState(false)
  const [html, setHtml] = React.useState('')

  function handleSendMessage () {
    Keyboard.dismiss()
    if (!recipientEmail) {
      setAlert({
        content: translations.translate('sendHtmlEmail.errorEmailRecipient'),
        title: 'Ops',
        open: true
      })
      return
    }
    if (!html) {
      setAlert({
        content: translations.translate('sendHtmlEmail.errorEmailContent'),
        title: 'Ops',
        open: true
      })
      return
    }
    setLoading(true)
    utils.authenticate()
      .then(accessToken => {
        const msg = utils.makeEmail(recipientEmail, emailSubject, html)
        return utils.sendEmail(msg, accessToken as string)
      })
      .then(() => {
        setLoading(false)
        setAlert({
          content: translations.translate('sendHtmlEmail.successAlertMessage'),
          title: translations.translate('sendHtmlEmail.successAlertTitle'),
          open: true
        })
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
        setAlert({
          content: error.message,
          title: 'Ops',
          open: true
        })
      })
  }

  async function handleFileSelector () {
    const SelectionResult = await DocumentPicker.getDocumentAsync({
      type: 'text/html'
    })
    if (SelectionResult.type === 'success') {
      const ReadResult = await FileSystem.readAsStringAsync(SelectionResult.uri)
      setHtml(ReadResult)
    }
  }
  return (
    <>
      <View style={styles.container}>
        <TextInput
          onChangeText={setRecipientEmail}
          keyboardType='email-address'
          style={styles.textInput}
          accessibilityStates={{}}
          label={translations.translate('sendHtmlEmail.textInputRecipientEmail')}
        />
        <TextInput
          onChangeText={setEmailSubject}
          style={styles.textInput}
          accessibilityStates={{}}
          label={translations.translate('sendHtmlEmail.textInputSubject')}
        />
        <Button
          style={styles.htmlButton}
          onPress={handleFileSelector}
          accessibilityStates={{}}>{
            translations.translate('sendHtmlEmail.buttonSelectFile')
          }</Button>
        <WebView
          source={{ html }}
        />
        <FAB
          onPress={handleSendMessage}
          style={styles.fab}
          accessibilityStates={{}}
          icon='send'
        />
      </View>
      <Alert {...alert} onClose={() => {
        setAlert({
          content: '',
          open: false,
          title: ''
        })
      }}/>
      <Loading open={loading}/>
    </>
  )
}

export default Send
