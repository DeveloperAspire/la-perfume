import React from 'react'

const AuthContext = React.createContext({
     items: [],
     totalAmount:0,
     addItem: (items)=> {}
})

export default AuthContext