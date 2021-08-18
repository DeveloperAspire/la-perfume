import { Fragment } from 'react';

import Header from './components/Layout/Header'
import Hero from './components/Layout/Hero'
import Perfumes from './components/Products/Perfumes'
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Perfumes/>
    </Fragment>
  );
}

export default App;
