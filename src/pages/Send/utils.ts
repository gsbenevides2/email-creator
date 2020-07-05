import * as Google from 'expo-google-app-auth';
import config from '../../config'

export async function authenticate(){
  const logInResult = await Google.logInAsync({
    androidClientId:config.androidClientId,
    iosClientId:config.iosClientId,
    scopes:['https://www.googleapis.com/auth/gmail.send']
  })
  if(logInResult.type === 'success'){
  }
  else {
  }
}
