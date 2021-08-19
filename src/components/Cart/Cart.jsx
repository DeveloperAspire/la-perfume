import React from "react";
import CartButton from "../Cart/CartButton";
import BackIcon from "../Layout/BackIcon";
import CartItem from './CartItem'

import classes from "./Cart.module.css";

function Cart({ show, notShowHandler }) {
  const buttonClass = `${classes.cart} ${show ? classes.show : ""}`;
  return (
    <div className={buttonClass}>
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
    </div>
  );
}

export default Cart;
