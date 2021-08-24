import React, {useState} from 'react'
import classes from './CheckOut.module.css'
import CartHeader from '../Cart/CartHeader'
import EditCartButton from '../Buttons/EditCartButton'
import TotalAmount from "../Layout/TotalAmount";
import CheckOutForm from './CheckOutForm'
import Confirm from '../Layout/Confirm'


const CheckOut = ({ show, checkOutHandler, showCartHandler }) => {
  const [submitted, setSubmitted] = useState(false)
const checkoutClass = `${classes.checkout} ${show ? classes.show : ''}`
const showConfirmMessage = ()=> {
  setSubmitted(true)

  setTimeout(()=>{
   setSubmitted(false)
  }, 3000)

  setTimeout(()=> {
    checkOutHandler()
  }, 4000)
}
       const submitOrder = async (orderDetails) => {
         const response = await fetch(
           "https://react-demo-7bdfc-default-rtdb.firebaseio.com/perfume-orders.json",
           {
             method: "POST",
             body: JSON.stringify(orderDetails),
           }
         );

         const data = await response.json();
      showConfirmMessage()
         console.log(data);
       };
  return (
    
    <div className={checkoutClass}>
      <CartHeader notShowHandler={checkOutHandler} title="Checkout" />
      <Confirm show={submitted}/>
      <CheckOutForm submitOrder={submitOrder}/>
      <TotalAmount />
      <EditCartButton checkOutHandler={checkOutHandler} showCartHandler={showCartHandler}/>
    </div>
  );
}

export default CheckOut
