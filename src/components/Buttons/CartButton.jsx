import React, {useContext, useEffect, useState} from 'react'

import classes from './CartButton.module.css'
import CartIcon from '../Icons/CartIcon'
import context from '../../store/context'


const CartDiv = ({onClick}) => {
  const[increment, setIncrement] = useState(false)

  const Ctx =useContext(context)
  const itemsNumber = Ctx.items.reduce((accmulator, currentValue)=> {
  return accmulator + currentValue.amount
  }, 0)

  const numberClass = `${classes.number} ${increment ? classes.bump : ""}`;

  useEffect(()=>{
    if(itemsNumber.length === 0){
     return
    }
    setIncrement(true)

    const timer = setTimeout(() => {
      setIncrement(false);
    }, 500);

    return ()=> {
      clearTimeout(timer)
      
    }
    
  }, [itemsNumber])
  


      return (
        <button className={classes.button} onClick={onClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <p className={numberClass}>{itemsNumber}</p>
        </button>
      );
}

export default CartDiv
