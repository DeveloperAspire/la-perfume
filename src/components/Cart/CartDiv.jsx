import React from 'react'

import classes from './CartDiv.module.css'
import CartIcon from './CartIcon'

function CartDiv() {
      return (
        <button>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <p className={classes.number}>0</p>
        </button>
      );
}

export default CartDiv
