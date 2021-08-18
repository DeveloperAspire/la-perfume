import React from 'react'

const AuthContext = React.createContext({
      openCart: true,
      openCartHandler: ()=> {}
})

export default AuthContext