import React from "react";
import classes from "./CartItem.module.css";
import TrashIcon from "../Icons/TrashIcon";

import {useSelector} from 'react-redux'
import {removeItemFromCart, reduceItemInCart, addItemToCart} from '../../store/cartSlice'
import {useDispatch} from 'react-redux'

function CartItem({id,name, description,image, price, amount}) {
  const cartItems = useSelector( state => state.cart.items)
  const dispatch = useDispatch()

  const filterPrice = cartItems.filter((item) => item.id === id);

  const totalPrice = filterPrice[0].price * filterPrice[0].amount
  const itemPrice=`$${totalPrice.toFixed(2)}`

const reduceAmount = ()=> {
   const itemToBeReduced = {
     id,
     name,
     image,
     price,
     amount: 1,
     description,
   };
   dispatch(reduceItemInCart(itemToBeReduced))

}
  const removeItem = () => {
  dispatch(removeItemFromCart(id))

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
    dispatch(addItemToCart(added))
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
            <p onClick={reduceAmount}>-</p>
            <span>{amount}</span> 
            <p onClick={addMore}>+</p>
          </div>
          <p className={classes.price}>{itemPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
