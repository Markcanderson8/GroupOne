import { useEffect, useState } from "react";
import styles from "./cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  // this is the cart
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += Number(item.itemPrice) * item.quantity));
    setPrice(ans.toFixed(2));
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.itemId !== id);
    setCart(arr);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

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
              <button className={styles.add} onClick={() => handleChange(i, 1)}>
                +
              </button>
              <div>
                <h2>{i.quantity}</h2>
              </div>
              <button
                className={styles.sub}
                onClick={() => handleChange(i, -1)}
              >
                -
              </button>
              <div className={styles.price}>
                <h2>${i.itemPrice}</h2>
              </div>
              <button
                className={styles.delete}
                onClick={() => handleRemove(i.itemId)}
              >
                D
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <>
            <div>
              <h1>Total: ${price}</h1>
            </div>
            <div className={styles.submitContainer}>
              <button
                className={styles.purchaseButton}
                onClick={() => navigate("/cart/purchase")}
              >
                Purchase Items
              </button>
            </div>
          </>
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
