import React from "react";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.columnName}></div>
          <div className={styles.cartItem}></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
