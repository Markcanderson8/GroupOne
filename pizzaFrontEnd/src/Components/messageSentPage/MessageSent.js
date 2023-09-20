import React from "react";
import styles from "./messageSent.module.css";

const MessageSent = ({ cart }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <div className={styles.page}>
        <h1>Message Sent!!!</h1>
      </div>
    </div>
  );
};

export default MessageSent;
