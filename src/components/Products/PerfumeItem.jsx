import React, {useState}from 'react'
import { addItemToCart } from '../../store/cartSlice'
import { useDispatch } from 'react-redux'


import classes from './PerfumeItem.module.css'

const PerfumeItem = ({id,name,price,image,description}) => {
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)
  let buttonClass = added ? `${classes.added} ${classes.button} `: classes.button
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
        dispatch(addItemToCart(newItem))
        setAdded(true)

       setTimeout(()=>{
         setAdded(false)
       }, 1200)
       
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
