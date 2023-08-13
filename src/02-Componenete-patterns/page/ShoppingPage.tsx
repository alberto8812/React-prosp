import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { Product, onChangeArgs } from '../interface/interfaces'

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

  const onproductCountChange = ({Count,Product}:onChangeArgs)=>{

    setShoppingCart(oldShoppingCart=>{
      if(Count===0){
       
       const{[Product.id]:toDelete,...rest}=oldShoppingCart;//desetructuramos el elemento que quiero el minar el numero de id.

        return rest;//
      }

      return {
        ...oldShoppingCart,
        [Product.id]:{...Product,count:Count}
      }
    })

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
                onChange={onproductCountChange}
    
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
