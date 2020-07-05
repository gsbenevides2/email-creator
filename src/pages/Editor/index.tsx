import React from 'react';
import { TouchableWithoutFeedback, View, TextInput, Keyboard } from "react-native";
import styles from './styles'
import { useNavigation } from "@react-navigation/native";
import {StackNavigationOptions} from '@react-navigation/stack'
import {IconButton} from 'react-native-paper'

const Editor:React.FC = ()=>{
  const textInputRef = React.useRef<TextInput>(null)
  const [text, setText] = React.useState<string>('Teste')
  const navigation = useNavigation()

  function handleToView(){
    navigation.navigate('View',{text})
  }
  function setNavigationHeader(){
    const options:StackNavigationOptions = {
      headerRight:()=>(
        <IconButton
          accessibilityStates={{}}
          icon='eye'
          color='#000'
          onPress={handleToView}
          size={25}/>
        )
    }
    navigation.setOptions(options)
  }

  setNavigationHeader()
  return (
    <TouchableWithoutFeedback
      onPress={()=>{
        if(textInputRef.current){
          textInputRef.current.blur()
          textInputRef.current.focus()
        }
      }}>
      <View
      style={styles.container}>
      <TextInput
        ref={textInputRef}
        defaultValue={text}
        multiline
        autoCorrect={false}
        onChangeText={text=>setText(text)}
      />
    </View>
    </TouchableWithoutFeedback>
  );
}

export default Editor
