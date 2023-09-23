import React from "react";
import styles from "./adminPage.module.css";
import Button from "../button/Button";

const AdminPage = ({ cart }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Admin Page</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.submitContainer}>
          <Button name={"Add Item"} />
          <Button name={"Edit Item"} />
        </div>
        <div className={styles.submitContainer}>
          <Button name={"Delete Item"} />
        </div>
        <div className={styles.submitContainer}>
          <Button name={"Add User"} />
          <Button name={"Edit User"} />
        </div>
        <div className={styles.submitContainer}>
          <Button name={"Delete User"} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
