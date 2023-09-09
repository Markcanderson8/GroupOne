import React from "react";
import styles from "./notRegisteredPage.module.css";
import { Link } from "react-router-dom";
const NotRegisteredPage = () => {
  return (
    <div>
      <h1 className={styles.header}>
        Not Registered...Must Register to order!
      </h1>
      <p>
        <Link to="/register" className={styles.click}>
          Click Here
        </Link>
        to Register
      </p>
    </div>
  );
};

export default NotRegisteredPage;
