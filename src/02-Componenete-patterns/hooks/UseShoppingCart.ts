import  { useState } from 'react'
import { onChangeArgs } from '../interface/interfaces';
import { ProductInCart } from '../page/ShoppingPage';


export const UseShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});

    const onproductCountChange = ({Count,Product}:onChangeArgs)=>{

      setShoppingCart(oldShoppingCart=>{
        const prodcutIncart:ProductInCart=oldShoppingCart[Product.id] || {...Product,count:0}//SI EL OBJETO NO EXISTE LO CARGA CON 0
        
        if(Math.max(prodcutIncart.count + Count,0)>0){// EVALUA SI E MAYOR A 0
          prodcutIncart.count += Count ;
          return{
            ...oldShoppingCart,
            [Product.id]: prodcutIncart
          }
        }
        const{[Product.id]:toDelete,...rest}=oldShoppingCart;//desetructuramos el elemento que quiero el minar el numero de id.
        return rest;//

      })
  
    };




    
  return{
    onproductCountChange,
    shoppingCart
  }
}
