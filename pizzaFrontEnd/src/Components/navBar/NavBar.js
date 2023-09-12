import React from "react";
import styles from "./navBar.module.css";
import logo from "../../images/pizza-logo.avif";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AuthProvider";

function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const { role } = useAppContext();
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
      <Link>About Us</Link>
      <h1>The Pizza Shack</h1>
      <Link
        className={isLoggedIn ? styles.hidden : styles.navLinks}
        to="/register"
      >
        Register
      </Link>
      <Link className={styles.navLinks} to="/contact-us">
        Contact Us
      </Link>
      <Link
        to="/addItems"
        className={isLoggedIn && role === "admin" ? styles.show : styles.hidden}
      >
        Add Items
      </Link>
      {isLoggedIn ? (
        <Link
          to="/"
          className={styles.navLinks}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Logout
        </Link>
      ) : (
        <Link className={styles.navLinks} to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default NavBar;
