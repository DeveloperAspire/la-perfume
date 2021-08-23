import React, {useContext,useState}from 'react'
import context from '../../store/context'

import classes from './PerfumeItem.module.css'

const PerfumeItem = ({id,name,price,image,description}) => {
  const [added, setAdded] = useState(false)
  let buttonClass = `${added ? classes.added : classes.button}`
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
        setAdded(true)
        buttonClass = `${classes.added}`;

       setTimeout(()=>{
         setAdded(false)
         buttonClass=`${classes.added}`
       }, 1000)
       
      }
      return (
        <div className={classes.product}>
          <div className={classes['img-container']}>
            <img src={image} alt="" />
          </div>

          <h4 className={classes.name}>{name}</h4>
          <p className={classes.description}>{description}</p>
          <p className={classes.price}>{itemPrice}</p>
          <button className={buttonClass} onClick={addToCart}>{added ? 'Added' : 'Add to cart'}</button>
        </div>
      );
}

export default PerfumeItem
