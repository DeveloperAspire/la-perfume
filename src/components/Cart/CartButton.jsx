import React, {useContext} from 'react'

import classes from './CartButton.module.css'
import CartIcon from './CartIcon'
import context from '../../store/context'


function CartDiv({onClick}) {

  const Ctx =useContext(context)
  const itemsNumber = Ctx.items.reduce((accmulator, currentValue)=> {
  return accmulator + currentValue.amount
  }, 0)


      return (
        <button className={classes.button} onClick={onClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <p className={classes.number}>{itemsNumber}</p>
        </button>
      );
}

export default CartDiv
