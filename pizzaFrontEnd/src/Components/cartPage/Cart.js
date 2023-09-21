import { useEffect, useState } from "react";
import styles from "./cart.module.css";
import { useNavigate } from "react-router-dom";
import trashCan from "../../images/trash-can-solid.svg";
import { Link } from "react-router-dom";

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
        {cart.length > 0 ? (
          <div className={styles.numberOfItems}>{cart.length}</div>
        ) : (
          <div className={styles.hideNumItems}>{cart.length}</div>
        )}
        <div className={styles.header}>
          <h1>Cart</h1>
        </div>
        <div className={styles.columnName}></div>
        <div className={styles.cartItem}>
          {cart.map((i, index) => (
            <div className={styles.row} key={index}>
              <Link to={`/products/${i.itemId}`}>
                <img className={styles.pic} src={i.itemImg} alt="" />
              </Link>
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
                <img
                  className={styles.trash}
                  src={trashCan}
                  alt="trash can icon"
                />
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
                className={styles.clearButton}
                onClick={() => setCart([])}
              >
                Clear Out Cart
              </button>
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
