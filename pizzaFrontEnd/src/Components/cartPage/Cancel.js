import React, { useEffect } from "react";
import styles from "./cancel.module.css";
import { useNavigate } from "react-router-dom";

const Cancel = ({ cart }) => {
  const message = "Sorry to see you cancelled your payment!";
  const navigate = useNavigate();

  const timer = () => {
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };

  useEffect(() => {
    timer();
  });

  return (
    <>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <div className={styles.heading}>
        <h1>{message}</h1>
      </div>
    </>
  );
};

export default Cancel;
