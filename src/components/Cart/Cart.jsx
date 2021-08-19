import React from "react";
import CartHeader from "./CartHeader";

import CartItem from "./CartItem";

import classes from "./Cart.module.css";

function Cart({ show, notShowHandler }) {
  const cartClass = `${classes.cart} ${show ? classes.show : ""}`;
  return (
    <div className={cartClass}>
      <CartHeader notShowHandler={notShowHandler} title="Your Cart"/>

      <CartItem />

      <div className={classes.total}>
        <span>Total</span>
        <span>$20.55</span>
      </div>
    </div>
  );
}

export default Cart;
