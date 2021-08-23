import React from "react";
import ForwardIcon from "../Layout/ForwardIcon";

import classes from "./BackToCart.module.css";

function BackToCart({ showCartHandler, checkOutHandler }) {
  const showCheckOut = () => {
    checkOutHandler();

    setTimeout(() => {
     showCartHandler();
    }, 500);
  };
  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={showCheckOut}>
        <p>Edit Cart</p>
        <span className={classes.icon}>
          <ForwardIcon />
        </span>
      </button>
    </div>
  );
}

export default BackToCart;
