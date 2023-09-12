import React from "react";
import styles from "./adminPage.module.css";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Admin Page</div>
          <div className={styles.underline}></div>
        </div>
        <form>
          <div className={styles.submitContainer}>
            <button
              className={styles.button}
              onClick={() => navigate("/adminPage/addItems")}
            >
              Add New Item
            </button>
            <button
              className={styles.button}
              onClick={() => navigate("/adminPage/addItems")}
            >
              Edit Item
            </button>
          </div>
          <div className={styles.submitContainer}>
            <button
              className={styles.button}
              onClick={() => navigate("/adminPage/addItems")}
            >
              Delete Item
            </button>
          </div>
          <div className={styles.submitContainer}>
            <button className={styles.button}>Add New User</button>
            <button className={styles.button}>Edit User</button>
          </div>
          <div className={styles.submitContainer}>
            <button className={styles.button}>Delete User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
