import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";

const ItemCard = ({ product, handleClick }) => {
  const { itemImg, itemName, itemSize, itemPrice } = product;

  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <img className={styles.img} src={itemImg} alt={`${itemName} Pizza`} />
        <div className={styles.cardBody}>
          <h2 className={styles.heading}>{itemName}</h2>
          <p>Size: {itemSize}</p>
          <p>Price: ${itemPrice}</p>
        </div>
        <div className={styles.cartButton}>
          <Link
            className={styles.cart}
            onClick={() => {
              handleClick(product);
              product.quantity = 1;
            }}
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
