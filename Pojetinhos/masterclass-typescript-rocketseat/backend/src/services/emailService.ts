interface IMailtTo{
  name: string;
  email: string;
}

interface IMailtMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailtTo,
  message: IMailtMessage;
}

class EmailService{
  sendMail({ to, message }: IMessageDTO){
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;