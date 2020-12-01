import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Mailgen from 'mailgen';

dotenv.config();

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ACCOUNT_NAME,
    pass: process.env.GMAIL_ACCOUNT_PASSWORD
  }
});

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Rica Incorporation',
    link: '#'
  }
});

const generateEmail = async (name, intro, instructions, buttonText, link) => ({
  body: {
    name,
    intro,
    action: {
      instructions,
      button: {
        color: '#C02006',
        text: buttonText,
        link
      }
    }
  }
});

const generateMessage = async (email, template) => ({
  to: email,
  from: 'Rica Incorporation',
  subject: 'Reset password',
  text: 'hello',
  html: template,
});

const sendMail = async (data, name, intro, instructions, buttonText, link) => {
  const email = await generateEmail(name, intro, instructions, buttonText, link);
  const template = mailGenerator.generate(email);
  const message = await generateMessage(data, template);
  mail.sendMail(message,function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});
};
export default sendMail;
