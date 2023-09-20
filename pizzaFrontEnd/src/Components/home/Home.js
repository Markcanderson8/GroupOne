import pepperoni from "../../images/pepperoni.jpg";
import cheese from "../../images/Cheese-pizza-1.webp";
import sausage from "../../images/sausage.jpg";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

function Home({ cart, isLoggedIn }) {
  return (
    <div className={styles.home}>
      {isLoggedIn && cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <h1>Any Cheese, Pepperoni, or Cheese 10% off daily!!!</h1>
      <div className={styles.pizzas}>
        <Link to="/products/4">
          <img className={styles.sausage} src={sausage} alt="sausage pizza" />
        </Link>
        <Link to="/products/2">
          <img className={styles.cheese} src={cheese} alt="cheese pizza" />
        </Link>
        <Link to="/products/3">
          <img
            className={styles.pepperoni}
            src={pepperoni}
            alt="pepperoni pizza"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
