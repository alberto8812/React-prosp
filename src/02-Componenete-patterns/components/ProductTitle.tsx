import { ProductContext } from "./ProductCard"
import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";


interface Props{
  title?:string,
  className?:string
  style?:CSSProperties
}


export const ProductTitle=({title,className}:Props)=>{
    const {Product} = useContext(ProductContext)
      return(
      <span className={`${styles.productDescription} ${className}`}>{title?title:Product.title}</span>
      )
    }