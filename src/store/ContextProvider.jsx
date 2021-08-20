import React, {useReducer} from 'react'
import AuthContext from './context'

const defaultCartState = {
  items:[],
  totalAmount: 0
}

const cartReducerFn = (state, action) =>{
  if(action.type === 'ADD'){
    const updatedItems = state.items.concat(action.value) 
    const totalAmount = action.value.price * action.value.amount
    const newCart ={
      items: updatedItems,
      totalAmount:totalAmount
    }

    return newCart
  }

  return defaultCartState
}

function ContextProvider(props) {
  // eslint-disable-next-line
  const [cartState, dispatchFn] = useReducer(cartReducerFn, defaultCartState )

  const addItemHandler = (item)=> {
    dispatchFn({type:"ADD", value:item})
  }

  const value = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler
  }
  

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default ContextProvider
