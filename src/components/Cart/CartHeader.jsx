import React from 'react'
import CartButton from "../Buttons/CartButton";
import BackIcon from "../Icons/BackIcon";

import classes from './CartHeader.module.css'

function CartHeader({notShowHandler,title}) {
      return (
        <div>
          <div className={classes.heading}>
            <button className={classes.button} onClick={notShowHandler}>
              <span className={classes.icon}>
                <BackIcon />
              </span>
              <p>Continue shopping</p>
            </button>
            <h3>{title}</h3>
            <CartButton />
          </div>
        </div>
      );
}

export default CartHeader
