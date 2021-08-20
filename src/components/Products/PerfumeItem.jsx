import React, {useContext}from 'react'
import context from '../../store/context'

import classes from './PerfumeItem.module.css'

const PerfumeItem = ({id,name,price,image,description}) => {
  const Ctx = useContext(context)
      const itemPrice = `$${price}`

      const addToCart = ()=> {
        const newItem ={
          id,
          name,
          image,
          price,
          description,
          amount:1
        }
        Ctx.addItem(newItem)
      }
      return (
        <div className={classes.product}>
          <div className={classes['img-container']}>
            <img src={image} alt="" />
          </div>

          <h4 className={classes.name}>{name}</h4>
          <p className={classes.description}>{description}</p>
          <p className={classes.price}>{itemPrice}</p>
          <button onClick={addToCart}>Add to cart </button>
        </div>
      );
}

export default PerfumeItem
