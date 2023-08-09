import React from 'react'
import { ProductCard } from '../components/ProductCard'

const product={
  id:'1',
  title:'Coffee-mug',

}



export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <ProductCard Product={product} />
    </div>
  )
}
