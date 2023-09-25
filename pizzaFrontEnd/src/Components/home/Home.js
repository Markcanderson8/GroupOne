import styles from "./home.module.css";
import { Link } from "react-router-dom";
import cheeseVid from "../../videos/cheese.mp4";
import peopleEating from "../../videos/PeopleEating.mp4";

function Home({ cart, isLoggedIn }) {
  return (
    <div className={styles.home}>
      {isLoggedIn && cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <h1>Any Cheese, Pepperoni, or Sausage 10% off daily!!!</h1>
      <div className={styles.pizzas}>
        <Link to="/products/2">
          <video className={styles.sausage} src={cheeseVid} loop autoPlay />
        </Link>
        <Link to="/products">
          <video className={styles.cheese} src={peopleEating} loop autoPlay />
        </Link>
        <Link to="/products/2">
          <video className={styles.sausage} src={cheeseVid} loop autoPlay />
        </Link>
      </div>
    </div>
  );
}

export default Home;
