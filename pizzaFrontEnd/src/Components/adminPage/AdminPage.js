import React from "react";
import styles from "./adminPage.module.css";
import { useNavigate } from "react-router-dom";

const AdminPage = ({ cart }) => {
  const navigate = useNavigate();

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
          <button
            className={styles.button}
            onClick={() => navigate("/adminPage/addItems")}
          >
            Add Item
          </button>
          <button
            className={styles.button}
            onClick={() => navigate("/adminPage/editItems")}
          >
            Edit Item
          </button>
        </div>
        <div className={styles.submitContainer}>
          <button
            className={styles.button}
            onClick={() => navigate("/adminPage/deleteItems")}
          >
            Delete Item
          </button>
        </div>
        <div className={styles.submitContainer}>
          <button
            className={styles.button}
            onClick={() => navigate("/adminPage/addUsers")}
          >
            Add New User
          </button>
          <button
            className={styles.button}
            onClick={() => navigate("/adminPage/editUsers")}
          >
            Add New User
          </button>
        </div>
        <div className={styles.submitContainer}>
          <button
            className={styles.button}
            onClick={() => navigate("/adminPage/deleteUsers")}
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
