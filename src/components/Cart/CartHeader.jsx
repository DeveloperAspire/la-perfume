import React from 'react'
import CartButton from "../Cart/CartButton";
import BackIcon from "../Layout/BackIcon";

import classes from './CartHeader.module.css'

function CartHeader({notShowHandler}) {
      return (
        <div>
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
        </div>
      );
}

export default CartHeader
