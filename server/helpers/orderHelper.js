import OrdersServices from '../services/ordersServices';
import HistoryServices from '../services/historyServices';

const {
  changeOrderStatus,
  addExpiredOrderQuantity,
  deleteExpiredOrder,
  getAllExpiredOrder,
  getAllClientOrders,
} = OrdersServices;
const {
  createHistory,
} = HistoryServices

const clientOrderPayed = async (id) => {
    try{
      const data ={
        id,
        status:'payed',
      }
      await changeOrderStatus(data);
    }
    catch(err){
      return error;
    }
  }
  const updateForExpiredOrder = async (id) => {
    try{
      const totalQuantity = await addExpiredOrderQuantity(id);
      const expiredOrders = await getAllExpiredOrder(id);
      expiredOrders.forEach(async (order) => {
        try{
          await createHistory(order.dataValues);
        }
        catch(error){
          return error;
        }
      });
      const deleted = await deleteExpiredOrder(id);
      return totalQuantity;
    }
    catch(err) {
      return err.message;
    }

  }
  const allowDiscount = async (data) => {
    console.log(data.id);
    const orders = await getAllClientOrders(data.id);
    let sum = 0;
    orders.map(order=>{
      if(order.status==='payed' && order.bonus === null){
        sum=sum+order.amount;
      }
    });
    console.log(sum,data.amount);
    if (data.amount>=1000000){
      orders.map(async(order)=>{
        if(order.status==='payed'){
        const data ={
          id:order.id,
          status:'discounted',
        }
        await changeOrderStatus(data);
      }
      });
      console.log('allowed discount');
      return true;
    }
    if ((sum + data.amount)>=2000000){
      orders.map(async(order)=>{
        if(order.status==='payed'){
        const data ={
          id:order.id,
          status:'discounted',
        }
        await changeOrderStatus(data);
      }
      });
      console.log('allowed discount');    
      return true;  
    }
    console.log('not allowed discount');
    return false;

  }
export default {clientOrderPayed, updateForExpiredOrder, allowDiscount};