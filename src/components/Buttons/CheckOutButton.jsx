import React from "react";
import BackIcon from "../Icons/BackIcon";

import classes from "./CheckOutButton.module.css";

const CheckOutButton = ({notShowHandler, checkOutHandler})=> {

      const showCheckOut = ()=> {
            notShowHandler()

            setTimeout(()=> {
checkOutHandler();
            }, 500)
            

      }
  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={showCheckOut}>
        <span className={classes.icon}>
          <BackIcon />
        </span>
        <p>Checkout</p>
      </button>
    </div>
  );
}

export default CheckOutButton;
