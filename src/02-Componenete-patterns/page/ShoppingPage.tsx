import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interface/interfaces'

const product={
  id:'1',
  title:'Coffee-mug',
  img:'./coffee-mug.png',

}

const product2={
  id:'2',
  title:'Coffee-mug2',
  img:'./coffee-mug2.png',

}

const products:Product[] = [product,product2]


interface ProductInCart  extends Product {
  count:number
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});

  const onproductCountChange = ()=>{
    console.log('onproductCountChange');
  };

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{display:'flex', flexDirection:'row'}}>
          {products.map(product=>(
                <ProductCard 
                Product={product} 
                className="bg-dark text-white"
                key={product.id}
                onChange={()=>onproductCountChange()}
              >
                <ProductImage className='custom-image'/>
                <ProductTitle title={''} className="text-bold"/>
                <ProductButtons className='custom-button' />
              </ProductCard>
          ))}

              <div className='shopping-cart'>
                <ProductCard 
                  Product={product2} 
                  className="bg-dark text-white"
                  style={{width: '100px'}}
                  
                >
                  <ProductImage className='custom-image'/>
                  <ProductButtons className='custom-button' />
                </ProductCard>

                <ProductCard 
                  Product={product} 
                  className="bg-dark text-white"
                  style={{width: '100px'}}
                >
                  <ProductImage className='custom-image'/>
                  <ProductButtons className='custom-button' />
                </ProductCard>
              </div>

        </div>
    </div>
  )
}
