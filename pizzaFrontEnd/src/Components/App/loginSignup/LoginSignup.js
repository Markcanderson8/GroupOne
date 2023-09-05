import React from "react";
import styles from "./loginSignup.module.css";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        {action === "Login" ? (
          <div></div>
        ) : (
          <>
            <div className={styles.input}>
              <input type="text" placeholder="First Name" />
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Phone Number" />
            </div>
          </>
        )}
        <div className={styles.input}>
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="Password" />
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className={styles.forgotPassword}>
            Lost Password? <span>Click Here!</span>
          </div>
        )}
      </div>
      <div className={styles.submitContainer}>
        <div
          className={
            action === "Login"
              ? `${styles.submit} ${styles.gray}`
              : styles.submit
          }
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={
            action === "Sign Up"
              ? `${styles.submit} ${styles.gray}`
              : styles.submit
          }
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
