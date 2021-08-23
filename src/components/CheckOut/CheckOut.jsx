import React from 'react'
import classes from './CheckOut.module.css'
import CartHeader from '../Cart/CartHeader'
import EditCartButton from '../Cart/EditCartButton'
import TotalAmount from "../Layout/TotalAmount";
import CheckOutForm from './CheckOutForm'

function CheckOut({ show, checkOutHandler, showCartHandler }) {
      const checkoutClass = `${classes.checkout} ${show ? classes.show : ''}`
  return (
    <div className={checkoutClass}>
      <CartHeader notShowHandler={checkOutHandler} title="Checkout" />
      <CheckOutForm />
      <TotalAmount />
      <EditCartButton checkOutHandler={checkOutHandler} showCartHandler={showCartHandler}/>
    </div>
  );
}

export default CheckOut
