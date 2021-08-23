import React, {useContext} from 'react'
import context from "../../store/context";
import classes from './TotalAmount.module.css'

const TotalAmount = ()=> {
      const Ctx = useContext(context)
      const totalAmount = `$${Ctx.totalAmount.toFixed(2)}`;
       return (
         <div className={classes.total}>
           <span>Total</span>
           <span>{totalAmount}</span>
         </div>
       );
}

export default TotalAmount