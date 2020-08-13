import OrdersServices from '../services/ordersServices';
import HistoryServices from '../services/historyServices';

const {
  changeOrderStatus,
  addExpiredOrderQuantity,
  deleteExpiredOrder,
  getAllExpiredOrder,
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
      console.log(err.message);
    }
  }
  const updateForExpiredOrder = async (id) => {
    try{
      const totalQuantity = await addExpiredOrderQuantity(id);
      const expiredOrders = await getAllExpiredOrder(id);
      console.log(expiredOrders,'ooooooooooo');
      expiredOrders.forEach(async (order) => {
        try{
          await createHistory(order.dataValues);
        }
        catch(error){
          console.log(error);
        }
      });
      const deleted = await deleteExpiredOrder(id);
      return totalQuantity;
    }
    catch(err) {
      console.log(err.message);
      return err.message;
    }

  }
export default {clientOrderPayed, updateForExpiredOrder};