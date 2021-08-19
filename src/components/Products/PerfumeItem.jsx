import React from 'react'

import image from '../../images/hero.jpg'
import classes from './PerfumeItem.module.css'

function PerfumeItem() {
      return (
            <div className={classes.product}>
                  <img src={image} alt="" />
                  <h4 className={classes.name}>Prada</h4>
                   <p className={classes.description}>This is a perfume that vammtiolf shyrruke jkvnbhioarioe kenkfegnek kenfgb;ebj jbfjbJEBGJKBEGJB JJUGHI JRGHRGIIHN jhgjaj.bjhg jenfkg.jj</p>
                   <p className={classes.price}>$20.55</p>
                   <button>Add to cart </button>
            </div>
      )
}

export default PerfumeItem
