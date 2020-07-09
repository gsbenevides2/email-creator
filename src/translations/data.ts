export interface LanguageData {
  sendHtmlEmail:{
    topAppBarTitle:string;
    textInputRecipientEmail:string;
    textInputSubject:string;
    buttonSelectFile:string;
    successAlertTitle:string;
    successAlertMessage:string;
    errorEmailRecipient:string;
    errorEmailContent:string;
    errorAccessAuthorization:string;
  }
}

type Data = {[locate:string]:LanguageData}

const data:Data = {
  'pt-BR': {
    sendHtmlEmail: {
      topAppBarTitle: 'Enviar Email em HTML',
      textInputRecipientEmail: 'Email do destinatário:',
      textInputSubject: 'Assunto do email:',
      buttonSelectFile: 'Selecionar arquivo HTML',
      successAlertTitle: 'Sucesso',
      successAlertMessage: 'Email enviado.',
      errorEmailRecipient: 'Por favor insira o email do destinatário!!',
      errorEmailContent: 'Insira um arquivo HTML!!!',
      errorAccessAuthorization: 'Por favor me autorize à acessar seu email!!'
    }
  },
  'en-US': {
    sendHtmlEmail: {
      topAppBarTitle: 'Send HTML Email',
      textInputRecipientEmail: "Recipient's Email:",
      textInputSubject: 'Email subject:',
      buttonSelectFile: 'Select HTML file',
      successAlertTitle: 'Success',
      successAlertMessage: 'Email sent.',
      errorEmailRecipient: "Please enter the recipient's email !!",
      errorEmailContent: 'Insert an HTML file !!!',
      errorAccessAuthorization: 'Please authorize me to access your email !!'
    }
  }
}

export default data
