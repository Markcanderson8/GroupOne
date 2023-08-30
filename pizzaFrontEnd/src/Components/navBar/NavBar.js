import React from "react";
import styles from "./navBar.module.css";
import logo from "../../images/pizza-logo.avif";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <img src={logo} alt="pizza logo" className={styles.logo} />
      <a href="#">Products</a>
      <h1>The Pizza Shack</h1>
      <a href="#">Register</a>
      <a href="#">Login</a>
    </div>
  );
}

export default NavBar;
