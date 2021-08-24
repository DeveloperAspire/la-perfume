import React from 'react'
import classes from './Confirm.module.css'

const Confirm = ({show})=> {

      const confirmClass = show ? `${classes.container} ${classes.show}` : classes.container
      return (
            <div className={confirmClass}>
                  <p>Your order have been submitted successfully</p>
                  <p>Kindly check your mail for order details</p>
            </div>
      )
}

export default Confirm