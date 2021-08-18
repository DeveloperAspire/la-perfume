import React from "react";

import classes from './Cart.module.css'

function Cart() {
  return (
    <div className={classes.cart}>
      <h1>Your Cart</h1>
      <div className={classes['table--head']}>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
      </div>
      
    </div>
  );
}

export default Cart;
