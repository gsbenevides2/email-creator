import React from 'react'
import { View } from 'react-native'
import { Portal, ActivityIndicator, Modal } from 'react-native-paper'

interface Props {
  open:boolean;
}

const Loading:React.FC<Props> = props => {
  return (
    <View>
      <Portal>
        <Modal dismissable={false} visible={props.open}>
          <ActivityIndicator
            accessibilityStates={{}}
            animating={true}
            size='large'/>
        </Modal>
      </Portal>
    </View>
  )
}

export default Loading
