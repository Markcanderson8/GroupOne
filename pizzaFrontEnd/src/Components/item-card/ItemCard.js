import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";
import { useLocation } from "react-router-dom";

const ItemCard = ({ product, handleClick }) => {
  const { itemId, itemImg, itemName, itemSize, itemPrice } = product;
  const location = useLocation();

  return (
    <div className={styles.item}>
      <>
        {location.pathname === `/products/${itemId}` ? (
          <div className={styles.singleCard}>
            <img
              className={styles.singleImg}
              src={itemImg}
              alt={`${itemName} Pizza`}
            />
            <div className={styles.cardBody}>
              <h2 className={styles.singleHeading}>{itemName}</h2>
              <p className={styles.para}>Size: {itemSize}</p>
              <p className={styles.para}>Price: ${itemPrice}</p>
            </div>
            <div className={styles.singleCartButton}>
              <Link
                className={styles.singleCart}
                onClick={() => {
                  handleClick(product);
                  product.quantity = 1;
                }}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.card}>
            <img
              className={styles.img}
              src={itemImg}
              alt={`${itemName} Pizza`}
            />
            <div className={styles.cardBody}>
              <h2 className={styles.heading}>{itemName}</h2>
              <p className={styles.para}>Size: {itemSize}</p>
              <p className={styles.para}>Price: ${itemPrice}</p>
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
        )}
      </>
    </div>
  );
};

export default ItemCard;
