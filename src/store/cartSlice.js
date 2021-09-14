import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const cartItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === cartItem.id);
      if (!exisitingItem) {
        state.items.push(cartItem);
        state.totalPrice += cartItem.price;
      } else {
        exisitingItem.amount++;
        state.totalPrice = state.totalPrice + cartItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const cartItemId = action.payload;
      const exisitingItem = state.items.find((item) => item.id === cartItemId);
      if (exisitingItem) {
        state.items = state.items.filter((item) => item.id !== cartItemId);
        state.totalPrice =
          state.totalPrice - exisitingItem.price * exisitingItem.amount;
      }
    },
    reduceItemInCart(state, action) {
      const cartItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === cartItem.id);
      if (exisitingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== cartItem.id);
        state.totalPrice = state.totalPrice - cartItem.price;
      } else {
        exisitingItem.amount--;
        state.totalPrice = state.totalPrice - cartItem.price;
      }
    },
    clearCart(){
          return initialState
    }
  },
});

export const { addItemToCart, reduceItemInCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
