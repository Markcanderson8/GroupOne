import React from "react";
import styles from "./cancel.module.css";

const Cancel = () => {
  return (
    <div className={styles.heading}>
      <h1>Sorry to see you cancelled your Stripe payment!</h1>
    </div>
  );
};

export default Cancel;
