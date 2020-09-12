import dotenv from 'dotenv';
import fetch from 'node-fetch';
import TransactionServices from '../services/transactionServices';

dotenv.config();

const {
  createTransaction,
} = TransactionServices;

const rwn_mobilemoney=  async (userData, data)=>{
  const transaction = await createTransaction(userData);
  let result = '';                     
  result = await fetch('https://api.flutterwave.com/v3/charges?type=mobile_money_rwanda', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.SECRET_KEY,
      },
      body: JSON.stringify(
        {
          "tx_ref":transaction.id,
          "amount":data.amount,
          "currency":data.currency,
          "network":"MTN",
          "email":data.email,
          "phone_number":data.phone_number,
          "fullname":data.fullname,
          // "callback": function (data) { // specified callback function
          //   console.log(data);
          // },
          "redirect_url":"http://localhost:3000/displayclientorders",
        }
      ),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);

    return result;
}
const verifyPayment = async (transactionId) => {
  let verified='';
  verified = await fetch ('https://api.flutterwave.com/v3/transactions/'+transactionId+'/verify',{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+process.env.SECRET_KEY,
    },
  })
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);
  return verified;
}
const cardPayment = async (userData, data) => {
  const transaction = await createTransaction(userData);
  let result = '';                     
  result = await fetch('https://api.flutterwave.com/v3/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.SECRET_KEY,
      },
      body: JSON.stringify(
        {
          "tx_ref":transaction.id,
          "amount":data.amount,
          "currency":data.currency,
          "redirect_url":"http://localhost:3000/displayclientorders",
          "payment_options":userData.type,
          "meta":{
             "consumer_id":userData.transactedBy,
             "consumer_mac":"92a3-912ba-1192a"
          },
          "customer":{
             "email":data.email,
             "phonenumber":data.phone_number,
             "name":data.fullname
          },
          "customizations":{
             "title":"RICA product Payments",
             "description":"The RICA product isn't free. Pay the price",
             "logo":"RICA INC"
          }
        }
      ),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);

    return result;
}

export default { rwn_mobilemoney, verifyPayment, cardPayment };