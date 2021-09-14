import classes from './TotalAmount.module.css'

import { useSelector } from 'react-redux';

const TotalAmount = ()=> {
  const cartPrice = useSelector(state => state.cart.totalPrice)
      const totalAmount = `$${cartPrice.toFixed(2)}`;
       return (
         <div className={classes.total}>
           <span>Total</span>
           <span>{totalAmount}</span>
         </div>
       );
}

export default TotalAmount