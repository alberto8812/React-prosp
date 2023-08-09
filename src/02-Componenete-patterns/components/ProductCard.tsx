import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg"
import { UseProduct } from "../hooks/UseProduct";


export const ProductCard = () => {

const {Counter,increaseBy}=UseProduct()
  return (
    <div className={styles.productCard}>
        <img src="./coffee-mug.png "alt={noImage} className={styles.productImg} />

        <span className={styles.productDescription}>Coffee Mug</span>

        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>

            <div className={styles.countLabel}>{Counter}</div>

            <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
        </div>
    </div>

    

  )
}
