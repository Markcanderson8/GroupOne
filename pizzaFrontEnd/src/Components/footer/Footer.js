import styles from "./footer.module.css";
import { useLocation } from "react-router-dom";

function Footer({ cart }) {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/cart" && cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <h4>Created by: GroupOne</h4>
        </div>
      ) : (
        <div className={styles.footer}>
          <h4>Created by: GroupOne</h4>
        </div>
      )}
    </div>
  );
}

export default Footer;
