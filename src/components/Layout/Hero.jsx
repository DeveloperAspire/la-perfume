import React from "react";

import classes from './Hero.module.css'

import Image from "../../images/hero.jpg";

function Hero() {
  return (
    <main>
      <div className={classes.text}>
        <h1>
          Purchase Sweet Smelling Fragrance for as Low as $100 for your Friends
          and Family
        </h1>
        <p>
          La Perfume is a dedicated online store focused on bringing you the
          best fragrance money can by providing afforable perfumes that can be
          bought my anyone as low as $100
        </p>
        <button>Shop Now</button>
      </div>

      <div>
        <img src={Image} alt="Perfume on Precious Stone" />
      </div>
    </main>
  );
}

export default Hero;
