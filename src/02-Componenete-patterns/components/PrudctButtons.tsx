import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css";


interface Props{
  className?: string;
}
export const ProductButtons=({className }:Props)=>{
    const {increaseBy,Counter} = useContext(ProductContext)
    return(
      
    
      <div className={`${styles.buttonsContainer} ${className}`}>
          <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
  
          <div className={styles.countLabel}>{Counter}</div>
  
          <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
      </div>
    )
  }
  