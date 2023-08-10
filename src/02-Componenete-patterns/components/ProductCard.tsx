import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg"
import { UseProduct } from "../hooks/UseProduct";
import { Children, ReactElement,useContext,createContext } from "react";





interface Product{
    id: string;
    title:string;
    img?:string;
}

interface Props{
    Product: Product;
    children?: ReactElement|ReactElement[];
}


interface ProductContextProps {
  Counter: number;
  increaseBy:(value:number) => void;
  Product:Product;
}

const ProductContext=createContext({} as ProductContextProps)

const {Provider}=ProductContext

export const ProductImage=({img=''})=>{
  const {Product} = useContext(ProductContext)

  let imgToShow:string ;
   if(img){
    imgToShow = img;
   }else if(Product.img){
    imgToShow=Product.img;
   }else{
    imgToShow=noImage;
   }

 return (
  <img src={imgToShow} alt='producto imgr' className={styles.productImg} />
 )
}


export const ProductoTitle=()=>{
const {Product} = useContext(ProductContext)
  return(
      <span className={styles.productDescription}>{Product.title}</span>
  )
}


export const ProductButtons=()=>{
  const {increaseBy,Counter} = useContext(ProductContext)
  return(
    
  
    <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>

        <div className={styles.countLabel}>{Counter}</div>

        <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
    </div>
  )
}


export const ProductCard = ({children,Product}:Props) => {
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
