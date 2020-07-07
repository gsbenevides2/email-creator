import * as Google from 'expo-google-app-auth';
import config from '../../config'
import mimemessage from 'mimemessage'
import base64 from 'react-native-base64'
import axios from 'axios'
import translations from '../../translations'

export async function authenticate():Promise<string | undefined>{
  const logInResult = await Google.logInAsync({
    androidClientId:config.androidClientId,
    iosClientId:config.iosClientId,
    scopes:['https://www.googleapis.com/auth/gmail.send']
  })
  if(logInResult.type === 'success'){
    return logInResult.accessToken as string
  }
  else if(logInResult.type === 'cancel'){
    throw new Error(translations.translate('sendEmailMessage.)errorAccessAuthorization'))
  }
}

export function makeEmail(to:string, subject:string = '', message:string){
  const msg = mimemessage.factory({
	 contentType:'multipart/mixed',
	 body:[]
	})
	msg.header("MIME-Version","1.0")
	msg.contentTransferEncoding('7bit')
	msg.header("to",to)
	msg.header("subject",subject)
 
	const htmlEntity = mimemessage.factory({
	 contentType: 'text/html;charset=utf-8',
	 body: message
	});
	msg.body.push(htmlEntity)
 
 
	const str = msg.toString()
	const encodedMail = base64.encode(str).replace(/\+/g, '-').replace(/\//g, '_');
	return encodedMail;
 
}

export function sendEmail(msg:string, accessToken:string){
  return axios({
    method:'post',
    url:'https://www.googleapis.com/gmail/v1/users/me/messages/send',
    data:{
      raw:msg
    },
    headers:{
      Authorization:`Bearer ${accessToken}`
    }
  })
}
