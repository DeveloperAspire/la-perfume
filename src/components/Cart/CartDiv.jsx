import React, {useContext} from 'react'

import classes from './CartDiv.module.css'
import CartIcon from './CartIcon'
import context from '../../store/context'


function CartDiv({onClick}) {

  const Ctx =useContext(context)


      return (
        <button onClick={onClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <p className={classes.number}>{Ctx.itemsNumber}</p>
        </button>
      );
}

export default CartDiv
