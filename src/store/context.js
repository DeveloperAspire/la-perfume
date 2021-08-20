import React from 'react'

const AuthContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (items) => {},
  removeItem: (items)=>{}
});

export default AuthContext