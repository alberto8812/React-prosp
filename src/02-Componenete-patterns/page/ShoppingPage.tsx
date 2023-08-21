import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
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
      
                initialValues={{
                  count:4,
                  maxCount:10,
                }}
                >
                  {
                    ({reset})=>(
                      <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                      </>
                    )
                  }

              </ProductCard>

              <div className='shopping-cart'>


            
              </div>

        </div>
    </div>
  )
}
