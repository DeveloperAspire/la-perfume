import React from "react";
import classes from "./CartItem.module.css";
import TrashIcon from "../Layout/TrashIcon";
import image from '../../images/hero.jpg'

function CartItem() {
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <img src={image} alt="" />
        <div className={classes.description}>
          <h3>Prada</h3>
          <p>
            This is a perfume that vammtiolf shyrruke jkvnbhioarioe kenkfegnek
            kenfgb;ebj jbfjbJEBGJKBEGJB JJUGHI JRGHRGIIHN jhgjaj.bjhg jenfkg.jj
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
