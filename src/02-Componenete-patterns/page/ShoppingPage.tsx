import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interface/interfaces'
import { products } from '../data/products'



const product=products[0];


export interface ProductInCart  extends Product {
  count:number
}

export const ShoppingPage = () => {

  



  return (
    <div >
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{display:'flex', flexDirection:'row'}}>
       
                <ProductCard 
                Product={product} 
                className="bg-dark text-white"
                initialValues={{
                  count:4,
                  maxCount:10,
                }}
                >
                <ProductImage className='custom-image'/>
                <ProductTitle title={''} className="text-bold"/>
                <ProductButtons className='custom-button' />
              </ProductCard>

              <div className='shopping-cart'>


            
              </div>

        </div>
    </div>
  )
}
