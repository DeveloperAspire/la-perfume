import React, { useContext, useState, useEffect } from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CheckOutButton from "../Buttons/CheckOutButton";
import TotalAmount from '../Layout/TotalAmount'
import context from "../../store/context";

import classes from "./Cart.module.css";

function Cart({ show, notShowHandler, checkOutHandler }) {
  const Ctx = useContext(context);
  const [cartIsEmpty, setCartIsEmpty] = useState(Ctx.items.length === 0);

  useEffect(() => {
    setCartIsEmpty(Ctx.items.length === 0);
  }, [Ctx.items]);

  const cartItem = Ctx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      image={item.image}
      price={item.price}
      amount={item.amount}
    />
  ));

  const cartEmptyText = (
    <div className={classes["cart-text"]}>
      <p>Your Cart in Empty</p>
    </div>
  );
  const cartClass = `${classes.cart} ${show ? classes.show : ""}`;
  return (
    <div className={cartClass}>
      <CartHeader notShowHandler={notShowHandler} title="Your Cart" />
      {cartItem}

      {cartIsEmpty && cartEmptyText}
      {!cartIsEmpty && (
        <React.Fragment>
          <TotalAmount/>
          <CheckOutButton
            notShowHandler={notShowHandler}
            checkOutHandler={checkOutHandler}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default Cart;
