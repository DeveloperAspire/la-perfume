import React from 'react'

const AuthContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (items) => {},
  removeItem: (items) => {},
  reduceItem:(items)=> {}
});

export default AuthContext