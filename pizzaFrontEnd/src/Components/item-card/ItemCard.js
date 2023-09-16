import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";

const ItemCard = ({ product, handleClick }) => {
  const { itemId, itemImg, itemName, itemSize, itemPrice } = product;
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <Link to={`/products/${itemId}`} className={styles.link}>
          <img className={styles.img} src={itemImg} alt={`${itemName} Pizza`} />
        </Link>
        <div className={styles.cardBody}>
          <h2 className={styles.heading}>{itemName}</h2>
          <p>Size: {itemSize}</p>
          <p>Price: ${itemPrice}</p>
        </div>
        <div className={styles.cartButton}>
          <Link className={styles.cart} onClick={() => handleClick(product)}>
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
