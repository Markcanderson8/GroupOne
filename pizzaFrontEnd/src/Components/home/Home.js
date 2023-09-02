import pepperoni from "../../images/pepperoni.jpg";
import cheese from "../../images/Cheese-pizza-1.webp";
import sausage from "../../images/sausage.jpg";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Any Cheese, Pepperoni, or Cheese 10% off daily!!!</h1>
      <div className={styles.pizzas}>
        <div className={styles.sausageLink}>
          <Link to="/">
            <img className={styles.sausage} src={sausage} alt="sausage pizza" />
          </Link>
        </div>
        <div className={styles.cheeseLink}>
          <Link to="/">
            <img className={styles.cheese} src={cheese} alt="cheese pizza" />
          </Link>
        </div>
        <div className={styles.pepperoniLink}>
          <Link to="/">
            <img
              className={styles.pepperoni}
              src={pepperoni}
              alt="pepperoni pizza"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
