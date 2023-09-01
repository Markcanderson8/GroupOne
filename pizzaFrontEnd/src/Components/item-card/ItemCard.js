import styles from "./itemCard.module.css";

const ItemCard = (props) => {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.card}>
          <img className={styles.img} src={props.itemImg} alt="cheese pizza" />
          <div className="card-body">
            <h2 className={styles.heading}>{props.itemName}</h2>
            <p>{props.itemName} Pizza</p>
            <p>Size: {props.itemSize}</p>
            <p>Price: ${props.itemPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
