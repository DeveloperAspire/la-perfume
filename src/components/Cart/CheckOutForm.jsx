import React from 'react' 

import classes from './CheckOutForm.module.css'

const CheckOutForm = ()=> {

      return (
        <form className={classes.form}>
          <div className={classes["form-item"]}>
            <div className={classes["form-control"]}>
              <label htmlFor="Name">Full Name</label>
              <input type="text" />
            </div>

            <div className={classes["form-control"]}>
              <label htmlFor="Email">Email Address</label>
              <input type="email" />
            </div>

            <div className={classes["form-control"]}>
              <label htmlFor="Adress">Billing Address</label>
              <input type="text" />
            </div>

            <div className={classes["form-control"]}>
              <label htmlFor="Zip Code">Zip Code</label>
              <input type="text" />
            </div>
          </div>

          <button className={classes.button} type="submit">
            Send Order
          </button>
        </form>
      );
}

export default CheckOutForm