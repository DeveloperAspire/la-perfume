import React from 'react'

import classes from './PerfumeItem.module.css'

const PerfumeItem = ({name,price,image,description}) => {
      const itemPrice = `$${price}`
      return (
        <div className={classes.product}>
          <div className={classes['img-container']}>
            <img src={image} alt="" />
          </div>

          <h4 className={classes.name}>{name}</h4>
          <p className={classes.description}>{description}</p>
          <p className={classes.price}>{itemPrice}</p>
          <button>Add to cart </button>
        </div>
      );
}

export default PerfumeItem
