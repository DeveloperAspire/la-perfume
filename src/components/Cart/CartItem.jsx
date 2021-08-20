import React from "react";
import classes from "./CartItem.module.css";
import TrashIcon from "../Layout/TrashIcon";

function CartItem({name, description,image}) {
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <img src={image} alt="" />
        <div className={classes.description}>
          <h3>{name}</h3>
          <p>
            {description}
          </p>
        </div>
        <button>
          <span className={classes.icon}>
            <TrashIcon />
          </span>
        </button>
      </div>

      <div className={classes["add--more"]}>
        <p>Quantity</p>
        <div className={classes['input--container']}>
          <div className={classes.input}>
            <span>-</span>
            <input type="number" value="1" />
            <span>+</span>
          </div>
          <p className={classes.price}>$20.55</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
