import React from 'react'
import CartButton from '../Buttons/CartButton'

import './Header.module.css'

function Header({onClick}) {
      return (
            <header>
                 <h1>La Perfume</h1> 
                 <CartButton onClick={onClick}/>
                 
            </header>
      )
}

export default Header
