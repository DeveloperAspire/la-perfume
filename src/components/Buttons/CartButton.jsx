import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

import classes from './CartButton.module.css'
import CartIcon from '../Icons/CartIcon'



const CartDiv = ({onClick}) => {
  const[increment, setIncrement] = useState(false)
  const cartItem = useSelector(state => state.cart.items)
  const itemNumber = cartItem.reduce((accmulator, currentValue)=> {
    return accmulator + currentValue.amount
  },0)

  
  const numberClass = `${classes.number} ${increment ? classes.bump : ""}`;

  useEffect(()=>{
    if(itemNumber.length === 0){
     return
    }
    setIncrement(true)

    const timer = setTimeout(() => {
      setIncrement(false);
    }, 500);

    return ()=> {
      clearTimeout(timer)
      
    }
    
  }, [itemNumber])
  


      return (
        <button className={classes.button} onClick={onClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <p className={numberClass}>{itemNumber}</p>
        </button>
      );
}

export default CartDiv
