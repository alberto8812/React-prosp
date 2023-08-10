import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg"
import { UseProduct } from "../hooks/UseProduct";




interface Product{
    id: string;
    title:string;
    img?:string;
}

interface Props{
    Product: Product;
}

export const ProductImage=({img=''})=>{
 return (
  <img src={img?img:noImage} alt='producto imgr' className={styles.productImg} />
 )
}


export const ProductoTitle=({title}:{title:string})=>{

  return(
      <span className={styles.productDescription}>{title}</span>
  )
}

interface ProductButtonsProps{
  Counter:number;
  increaseBy:(value:number) => void;
}

export const ProductButtons=({Counter,increaseBy}:ProductButtonsProps)=>{
 
  return(
    
  
    <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>

        <div className={styles.countLabel}>{Counter}</div>

        <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
    </div>
  )
}


export const ProductCard = ({Product}:Props) => {
  const {Counter,increaseBy}=UseProduct()

  return (
    <div className={styles.productCard}>
      
      <ProductImage img={Product.img}/>
      <ProductoTitle title={Product.title}/>
      <ProductButtons Counter={Counter} increaseBy={increaseBy}/>
    </div>

    

  )
}
