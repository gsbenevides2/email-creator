import React from 'react'
import { View } from 'react-native'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper'

interface Props {
  title:string;
  content:string;
  open:boolean;
  onClose:()=>void;
}

const Alert:React.FC<Props> = props => {
  return (
    <View>
      <Portal>
        <Dialog visible={props.open}
          onDismiss={props.onClose}>
          <Dialog.Title accessibilityStates={{}}>{props.title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{props.content}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button accessibilityStates={{}} onPress={props.onClose}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )
}

export default Alert
