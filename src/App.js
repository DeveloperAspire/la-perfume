import { Fragment } from 'react';

import Header from './components/Layout/Header'
import Hero from './components/Layout/Hero'
import Perfumes from './components/Products/Perfumes'
import Quote from './components/Layout/Quote'
import Footer from './components/Layout/Footer'
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Perfumes/>
      <Quote/>
      <Footer/>
    </Fragment>
  );
}

export default App;
