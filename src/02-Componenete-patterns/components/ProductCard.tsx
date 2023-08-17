import styles from "../styles/styles.module.css";
import { UseProduct } from "../hooks/UseProduct";
import { createContext } from "react";
import { Product,ProductContextProps, onChangeArgs,InitialValues, ProductCardHandlers } from "../interface/interfaces";
import { ReactElement,CSSProperties } from "react";





export const ProductContext=createContext({} as ProductContextProps)

const {Provider}=ProductContext


export interface Props{
  Product: Product;
  //children?: ReactElement|ReactElement[];
  children: (arg:ProductCardHandlers)=>JSX.Element,
  className?: string;
  style?:CSSProperties
  onChange?: (arg:onChangeArgs)=>void ;
  Count?: number;
  initialValues?:InitialValues;
}


export const ProductCard = ({children,Product,className,style,onChange,Count,initialValues}:Props) => {
  const {Counter,increaseBy,maxCount,isMaxCountReached,reset}=UseProduct({onChange,Product,Count,initialValues})

  return (
    <Provider
    value={{increaseBy,Counter,Product,maxCount}}
    >
      <div className={`${styles.productCard}   ${className} `}
      style={style}
      >     

        {children({
          Count: Counter,
          maxcount: maxCount,
          isMaxCountReached: isMaxCountReached,
          Product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
    

  )
}
