import React from "react";
import styles from "./cancel.module.css";

const Cancel = ({ cart }) => {
  return (
    <>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <div className={styles.heading}>
        <h1>Sorry to see you cancelled your Stripe payment!</h1>
      </div>
    </>
  );
};

export default Cancel;
