import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";

const ItemCard = ({ product }) => {
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <Link to={`/item/${props.itemId}`} className={styles.link}>
          <img className={styles.img} src={props.itemImg} alt={`${props.itemName} Pizza`} />
        </Link>
        <div className={styles.cardBody}>
          <h2 className={styles.heading}>{props.itemName}</h2>
          <p>{props.itemName} Pizza</p>
          <p>Size: {props.itemSize}</p>
          <p>Price: ${props.itemPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
