import styles from "../styles/styles.module.css";
import { UseProduct } from "../hooks/UseProduct";
import { createContext } from "react";
import { Product,ProductContextProps, onChangeArgs } from "../interface/interfaces";
import { ReactElement,CSSProperties } from "react";





export const ProductContext=createContext({} as ProductContextProps)

const {Provider}=ProductContext


export interface Props{
  Product: Product;
  children?: ReactElement|ReactElement[];
  className?: string;
  style?:CSSProperties
  onChange?: (arg:onChangeArgs)=>void ;
  value?: number;  
}


export const ProductCard = ({children,Product,className,style,onChange,value}:Props) => {
  const {Counter,increaseBy}=UseProduct({onChange,Product,value})

  return (
    <Provider
    value={{increaseBy,Counter,Product}}
    >
      <div className={`${styles.productCard}   ${className} `}
      style={style}
      >     

        {children}
      </div>
    </Provider>
    

  )
}
