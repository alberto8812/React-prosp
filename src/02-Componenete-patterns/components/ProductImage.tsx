import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css";


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