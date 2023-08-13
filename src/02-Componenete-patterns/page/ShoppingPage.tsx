import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

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
        <ProductCard 
        Product={product} 
        className="bg-dark"
        >
          <ProductImage className='custom-image'/>
          <ProductTitle title={''} className="text-white"/>
          <ProductButtons />
        </ProductCard>
    </div>
  )
}
