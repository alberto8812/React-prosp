import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css";


interface Props{
  className?: string;
  style?:CSSProperties
}
export const ProductButtons=({className }:Props)=>{
    const {increaseBy,Counter,maxCount} = useContext(ProductContext)


   const isMaxReached= useCallback(
      () => !!maxCount && Counter===maxCount,// !! trabaja con un undefined  y evalue si los dos valores son iguales
      [Counter,maxCount],//argumento a evaluar
    )
    
    return(
      
    
      <div className={`${styles.buttonsContainer} ${className} `}>
          <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
  
          <div className={styles.countLabel}>{Counter}</div>
  
          <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}
          `} onClick={()=>increaseBy(1)}>+</button>
      </div>
    )
  }
  