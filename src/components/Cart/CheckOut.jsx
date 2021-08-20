import React from 'react'
import classes from './CheckOut.module.css'
import CartHeader from './CartHeader'
import CheckOutForm from './CheckOutForm'

function CheckOut({ show, checkOutHandler }) {
      const checkoutClass = `${classes.checkout} ${show ? classes.show : ''}`
  return (
    <div className={checkoutClass}>
      <CartHeader notShowHandler={checkOutHandler}  title="Checkout" />
      <CheckOutForm/>

    </div>
  );
}

export default CheckOut
