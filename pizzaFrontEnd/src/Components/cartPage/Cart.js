import styles from "./cart.module.css";

const Cart = ({ cart }) => {
  const { itemId, itemName, itemSize, itemPrice, itemImg } = cart;

  const addNums = () => {
    let i = 0;
    let sum = 0;
    for (i = 0; i < cart.length; i++) {
      sum += Number(cart[i].itemPrice);
    }
    return sum;
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Cart</h1>
        </div>
        <div className={styles.columnName}></div>
        <div className={styles.cartItem}>
          {cart.map((i, index) => (
            <div className={styles.row} key={index}>
              <img className={styles.pic} src={i.itemImg} alt="" />
              <h4 className={styles.name}>{i.itemName}</h4>
              <div className={styles.price}>
                <h2>{i.itemPrice}</h2>
              </div>
              <button className={styles.delButton}>D</button>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <div>
            <h1>Total:{addNums()}</h1>
          </div>
        ) : (
          <div>
            <h1>Cart is Empty</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
