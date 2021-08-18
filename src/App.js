import { useState } from 'react';

import Header from './components/Layout/Header'
import Hero from './components/Layout/Hero'
import Perfumes from './components/Products/Perfumes'
import Quote from './components/Layout/Quote'
import Footer from './components/Layout/Footer'
import Cart from './components/Cart/Cart'
import ContextProvider from './store/ContextProvider'

import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = ()=> {
    setShowCart(!showCart)
  }


  return (
    <ContextProvider>
      <Header onClick={showCartHandler}/>
      <Hero />
      <Perfumes />
      <Quote />
      <Footer />
      <Cart show={showCart}/>
    </ContextProvider>
  );
}

export default App;
