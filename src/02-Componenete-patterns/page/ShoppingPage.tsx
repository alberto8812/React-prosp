import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'


const product={
  id:'1',
  title:'Coffee-mug',
  img:'./coffee-mug.png',

}



export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <ProductCard Product={product} >
          <ProductImage/>
          <ProductTitle title={''}/>
          <ProductButtons />
        </ProductCard>
    </div>
  )
}
