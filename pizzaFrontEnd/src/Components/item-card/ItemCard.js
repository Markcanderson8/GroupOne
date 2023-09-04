import styles from "./ItemCard.module.css";

const ItemCard = ({ product }) => {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.card}>
          <img
            className={styles.img}
            src={product.itemImg}
            alt="cheese pizza"
          />
          <div className="card-body">
            <h2 className={styles.heading}>{product.itemName}</h2>
            <p>{product.itemName} Pizza</p>
            <p>Size: {product.itemSize}</p>
            <p>Price: ${product.itemPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
