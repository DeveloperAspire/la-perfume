import React from 'react'

import classes from './CartDiv.module.css'
import CartIcon from './CartIcon'


function CartDiv({onClick}) {

      return (
        <button onClick={onClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <p className={classes.number}>0</p>
        </button>
      );
}

export default CartDiv
