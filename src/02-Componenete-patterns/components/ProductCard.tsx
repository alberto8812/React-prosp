import styles from "../styles/styles.module.css";
import { UseProduct } from "../hooks/UseProduct";
import { createContext } from "react";
import { ProductCardProps,ProductContextProps } from "../interface/interfaces";





export const ProductContext=createContext({} as ProductContextProps)

const {Provider}=ProductContext


export const ProductCard = ({children,Product}:ProductCardProps) => {
  const {Counter,increaseBy}=UseProduct()

  return (
    <Provider
    value={{increaseBy,Counter,Product}}
    >
      <div className={styles.productCard}>
        
        {children}

      {/* <ProductImage img={Product.img}/>
        <ProductoTitle title={Product.title}/>
        <ProductButtons Counter={Counter} increaseBy={increaseBy}/>*/}
      </div>
    </Provider>
    

  )
}
