import React from 'react'
import CartDiv from '../Cart/CartDiv'

import './Header.module.css'

function Header({onClick}) {
      return (
            <header>
                 <h1>La Perfume</h1> 
                 <CartDiv onClick={onClick}/>
                 
            </header>
      )
}

export default Header
