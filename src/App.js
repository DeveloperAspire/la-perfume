import { useState, Fragment } from 'react';

import Header from './components/Layout/Header'
import Hero from './components/Layout/Hero'
import Perfumes from './components/Products/Perfumes'
import Quote from './components/Layout/Quote'
import Footer from './components/Layout/Footer'
import Cart from './components/Cart/Cart'

import './App.css';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  const [showCart, setShowCart] = useState(false)
  const [checkout, setCheckOut] = useState(false)

  const showCartHandler = ()=> {
    setShowCart(!showCart)
  }
  const checkOutHandler=()=>{
    setCheckOut(!checkout)
  }


  return (
    <Fragment>
      <Header onClick={showCartHandler} />
      <Hero />
      <Perfumes />
      <Quote />
      <Footer />
      <Cart
        show={showCart}
        notShowHandler={showCartHandler}
        checkOutHandler={checkOutHandler}
      />
      <CheckOut
        show={checkout}
        checkOutHandler={checkOutHandler}
        showCartHandler={showCartHandler}
      />
    </Fragment>
  );
}

export default App;
