import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";

const ItemCard = ({ product }) => {
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <Link to={`/products/${product.itemId}`} className={styles.link}>
          <img
            className={styles.img}
            src={product.itemImg}
            alt={`${product.itemName} Pizza`}
          />
        </Link>
        <div className={styles.cardBody}>
          <h2 className={styles.heading}>{product.itemName}</h2>
          <p>{product.itemName} Pizza</p>
          <p>Size: {product.itemSize}</p>
          <p>Price: ${product.itemPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
