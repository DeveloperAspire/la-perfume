import React, {useEffect, useState} from 'react'
import PerfumeItem from './PerfumeItem'

import classes from './Perfumes.module.css'

const Perfumes = () => {
  const [product, setProduct] = useState([])

  useEffect(()=> {
    fetchProducts()

  }, [])

  const fetchProducts = async ()=> {
      let transformedData = [];
       const response = await fetch(
         "https://react-demo-7bdfc-default-rtdb.firebaseio.com/perfumes.json"
       );
       const data = await response.json()

       console.log(data)
       for(let key in data){
         const productList = {
           id: key,
           name: data[key].name,
           price: data[key].price,
           description: data[key].description,
           image:data[key].image
         };
         transformedData.push(productList)
       }
       setProduct(transformedData)
  }

  const PRODUCTS = product.map((item) => <PerfumeItem key={item.id} name={item.name} image={item.image} description={item.description} price={item.price} />);
      return (
        <div className={classes.display}>
          {PRODUCTS}
        </div>
      );
}

export default Perfumes
