import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const sendSMS = async (number,message)=>{
  axios.post('https://portal.bulkgate.com/api/1.0/simple/transactional', {
          'application_id': process.env.SEND_SMS_ID,
          'application_token': process.env.SEND_SMS_TOKEN,
          'number': number,
          'text': message,
          'sender_id': 'gText',
          'sender_id_value': 'Rica'
      }
  ).then((resp)=>console.log(resp.data)).catch(console.log);
}
export default {sendSMS};