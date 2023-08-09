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


export const ProductCard = ({Product}:Props) => {

const {Counter,increaseBy}=UseProduct()
  return (
    <div className={styles.productCard}>
      <img src={Product.img?Product.img:noImage} alt={noImage} className={styles.productImg} />


        <span className={styles.productDescription}>{Product.title}</span>

        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>

            <div className={styles.countLabel}>{Counter}</div>

            <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
        </div>
    </div>

    

  )
}
