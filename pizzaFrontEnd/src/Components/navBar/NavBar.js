import React from "react";
import styles from "./navBar.module.css";
import logo from "../../images/pizza-logo.avif";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <img src={logo} alt="pizza logo" className={styles.logo} />
      <Link href="#">Products</Link>
      <h1>The Pizza Shack</h1>
      <Link href="#">Register</Link>
      <Link href="#">Login</Link>
    </div>
  );
}

export default NavBar;
