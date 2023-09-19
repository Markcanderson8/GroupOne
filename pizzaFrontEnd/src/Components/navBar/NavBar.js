import styles from "./navBar.module.css";
import logo from "../../images/pizza-logo.avif";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AuthProvider";
import cartImg from "../../images/cart-outline.png";

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
      <Link className={styles.navLinks} to="/about-us">
        About Us
      </Link>
      <h1 className={styles.heading}>The Pizza Shack</h1>
      <Link
        className={
          isLoggedIn && role === "admin" ? styles.hidden : styles.navLinks
        }
        to={isLoggedIn && role !== "admin" ? "/" : "/register"}
      >
        Register
      </Link>
      <Link className={styles.navLinks} to="/contact-us">
        Contact Us
      </Link>
      <Link
        to="/adminPage"
        className={
          isLoggedIn && role === "admin"
            ? styles.show && styles.navLinks
            : styles.hidden
        }
      >
        Admin Page
      </Link>
      {isLoggedIn ? (
        <>
          <Link
            to="/login"
            className={styles.navLinks}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            Logout
          </Link>
          <Link className={styles.cart} to="/cart">
            <img className={styles.cartIcon} src={cartImg} alt="cart icon" />
          </Link>
        </>
      ) : (
        <Link className={styles.navLinks} to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default NavBar;
