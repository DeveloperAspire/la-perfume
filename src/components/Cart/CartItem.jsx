import React, {useContext} from "react";
import classes from "./CartItem.module.css";
import TrashIcon from "../Layout/TrashIcon";
import context from '../../store/context'

function CartItem({id,name, description,image, price, amount}) {
  const Ctx = useContext(context);
  const filterPrice = Ctx.items.filter((item) => item.id === id);

  const totalPrice = filterPrice[0].price * filterPrice[0].amount
  const itemPrice=`$${totalPrice}`


  const removeItem = () => {
    const removed = {
      id,
      name,
      image,
      price,
      amount: 1,
      description,
    };
    Ctx.removeItem(removed);
  };
  const addMore = () => {
    const added = {
      id,
      name,
      image,
      price,
      amount: 1,
      description,
    };
    Ctx.addItem(added);
  };
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <img src={image} alt="" />
        <div className={classes.description}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <button>
          <span className={classes.icon} onClick={removeItem}>
            <TrashIcon />
          </span>
        </button>
      </div>

      <div className={classes["add--more"]}>
        <p>Quantity</p>
        <div className={classes["input--container"]}>
          <div className={classes.input}>
            <span>-</span>
            <input type="number" value={amount} />
            <span onClick={addMore}>+</span>
          </div>
          <p className={classes.price}>{itemPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
