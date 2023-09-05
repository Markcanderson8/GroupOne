import React from "react";
import styles from "./navBar.module.css";
import logo from "../../images/pizza-logo.avif";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.alignLogoCenter}>
        <Link className={styles.logoLink} to="/">
          <img src={logo} alt="pizza logo" className={styles.logo} />
        </Link>
      </div>

      <Link className={styles.navLinks} to="/products">
        Products
      </Link>
      <h1>The Pizza Shack</h1>
      <Link className={styles.navLinks} to="/signup">
        Register
      </Link>
      <Link className={styles.navLinks} to="/signup">
        Login
      </Link>
    </div>
  );
}

export default NavBar;
