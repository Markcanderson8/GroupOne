import pepperoni from "../../images/pepperoni.jpg";
import cheese from "../../images/Cheese-pizza-1.webp";
import sausage from "../../images/sausage.jpg";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Any Cheese, Pepperoni, or Cheese 10% off daily!!!</h1>
      <div className={styles.pizzas}>
        <img className={styles.sausage} src={sausage} alt="sausage pizza" />
        <img className={styles.cheese} src={cheese} alt="cheese pizza" />
        <img
          className={styles.pepperoni}
          src={pepperoni}
          alt="pepperoni pizza"
        />
      </div>
    </div>
  );
}

export default Home;
