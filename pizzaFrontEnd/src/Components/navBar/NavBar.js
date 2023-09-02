import React from "react";
import styles from "./navBar.module.css";
import logo from "../../images/pizza-logo.avif";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logoLink}>
        <Link to="/">
          <img src={logo} alt="pizza logo" className={styles.logo} />
        </Link>
      </div>
      <Link className={styles.productsLink} to="/products">
        Products
      </Link>
      <h1>The Pizza Shack</h1>
      <Link className={styles.registerLink} to="/">
        Register
      </Link>
      <Link className={styles.loginLink} to="/">
        Login
      </Link>
    </div>
  );
}

export default NavBar;
