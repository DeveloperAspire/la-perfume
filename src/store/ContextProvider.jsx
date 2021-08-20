import React, { useReducer } from "react";
import AuthContext from "./context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducerFn = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );

    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      let updatedItem;
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.value.amount,
        price: existingItem.price * action.value.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.value);
    }
    const totalAmount =state.totalAmount +  action.value.amount * action.value.price 
    const newCart = {
      items: updatedItems,
      totalAmount: totalAmount,
    };

    return newCart;
  }
  if(action.type === 'REMOVE'){
    const updatedItems = state.items.filter(item => item.id !== action.value.id )
    const totalAmount =
      state.items.amount + action.value.amount * action.value.price;
      const newCart = {
        items: updatedItems,
        totalAmount: totalAmount,
      };

      return newCart

  }

  return defaultCartState;
};

function ContextProvider(props) {
  // eslint-disable-next-line
  const [cartState, dispatchFn] = useReducer(cartReducerFn, defaultCartState);

  const addItemHandler = (item) => {
    dispatchFn({ type: "ADD", value: item });
  };
 const removeItemHandler = (item)=> {
     dispatchFn({ type: "REMOVE", value: item });
 }
  const value = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem:removeItemHandler
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default ContextProvider;
