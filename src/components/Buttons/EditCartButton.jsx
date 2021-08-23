import React from "react";
import ForwardIcon from "../Icons/ForwardIcon";

import classes from "./EditCartButton.module.css";

const EditCartButton = ({ showCartHandler, checkOutHandler }) => {
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

export default EditCartButton;
