import React, {useState} from 'react'
import AuthContext from './context'

function ContextProvider(props) {
      const [openCart, setOpenCart] = useState(false)

      const openCartHandler = ()=> {
         setOpenCart(openChart => !openCart)
      }

      const value={
            openCart,
            openCartHandler
      }

      return (
            <AuthContext.Provider value={value}>
                  {props.children}
                  
            </AuthContext.Provider>
      )
}

export default ContextProvider
