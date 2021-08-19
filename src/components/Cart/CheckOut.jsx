import React from 'react'
import classes from './CheckOut.module.css'
import CartHeader from './CartHeader'

function CheckOut({ show, checkOutHandler, notShowHandler }) {
      const checkoutClass = `${classes.checkout} ${show ? classes.show : ''}`
      const backToShopping = ()=> {
            checkOutHandler()
            notShowHandler()

      }
  return (
    <div className={checkoutClass}>
      <CartHeader notShowHandler={backToShopping}  title="Checkout" />
    </div>
  );
}

export default CheckOut
