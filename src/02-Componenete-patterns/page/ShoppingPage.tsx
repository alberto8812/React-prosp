import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interface/interfaces'
import { products } from '../data/products'
import { UseShoppingCart } from '../hooks/UseShoppingCart'





export interface ProductInCart  extends Product {
  count:number
}

export const ShoppingPage = () => {

  
  const{onproductCountChange,shoppingCart}=UseShoppingCart()


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
                onChange={onproductCountChange}
                Count={shoppingCart[product.id]?.count ||0 }// busqueda entre los dos objetos de procuto mas un si existe muestre 0
   
              >
                <ProductImage className='custom-image'/>
                <ProductTitle title={''} className="text-bold"/>
                <ProductButtons className='custom-button' />
              </ProductCard>
          ))}

              <div className='shopping-cart'>


              {Object.entries(shoppingCart).map(([key,product]) => (//Object.entries map solo hace iteracion con array no on un objeto
              // Object.entries propio de javascrip entrada de un objeto
              <ProductCard 
                  Product={product} 
                  className="bg-dark text-white"
                  style={{width: '100px'}}
                  key={product.id}
                  Count={product.count}
                  onChange={onproductCountChange}//  colocamos un onchange en el product del carrito de compras
                >
                  <ProductImage className='custom-image'/>
                  <ProductButtons className='custom-button' />
                </ProductCard>
              ))}
            
              </div>

        </div>
    </div>
  )
}
