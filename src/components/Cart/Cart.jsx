import React from "react";
import CartButton from "../Cart/CartButton";
import BackIcon from "../Layout/BackIcon";
import CartItem from './CartItem'

import classes from "./Cart.module.css";

function Cart({ show, notShowHandler }) {
  const cartClass = `${classes.cart} ${show ? classes.show : ""}`;
  return (
    <div className={cartClass}>
      <div className={classes.heading}>
        <button className={classes.button} onClick={notShowHandler}>
          <span className={classes.icon}>
            <BackIcon />
          </span>
          <p>Continue shopping</p>
        </button>
        <h3>Your Cart</h3>
        <CartButton />
      </div>

      <CartItem/>

      <div className={classes.total}>
        <span>Total</span>
        <span>$20.55</span>
      </div>
    </div>
  );
}

export default Cart;
