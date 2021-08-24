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
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.value);
    }
    const totalAmount =
      state.totalAmount + action.value.amount * action.value.price;
    const newCart = {
      items: updatedItems,
      totalAmount: totalAmount,
    };

    return newCart;
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.value.id)
    const existingItem = state.items[existingItemIndex]
    const updatedItems = state.items.filter(
      (item) => item.id !== action.value.id
    );
    const totalAmount =
      state.totalAmount - existingItem.price
    const newCart = {
      items: updatedItems,
      totalAmount: totalAmount,
    };

    return newCart;
  }
  if (action.type === "REDUCE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );
    const existingItem = state.items[existingItemIndex];
    const totalAmount =
      state.totalAmount -  existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.value.id);
    } else {
     const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [ ...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    
    const newCart = {
      items: updatedItems,
      totalAmount: totalAmount,
    };

    return newCart;
  }
  if(action.type === 'CLEAR'){
    return defaultCartState;
  }

  return defaultCartState;
};

const ContextProvider = (props)=> {
  // eslint-disable-next-line
  const [cartState, dispatchFn] = useReducer(cartReducerFn, defaultCartState);

  const addItemHandler = (item) => {
    dispatchFn({ type: "ADD", value: item });
  };
  const removeItemHandler = (item) => {
    dispatchFn({ type: "REMOVE", value: item });
  };
  const reduceItemHandler = (item) => {
    dispatchFn({ type: "REDUCE", value: item });
  };
  const clearCartHandler = ()=> {
    dispatchFn({type:'CLEAR'})
  }
  const value = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    reduceItem: reduceItemHandler,
    clearCart:clearCartHandler
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default ContextProvider;
