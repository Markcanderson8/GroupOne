import { useState, useEffect } from "react";
import styles from "./editItems.module.css";
import { Link, useNavigate } from "react-router-dom";
import constants from "../../util/constants";

const EditItems = ({ cart }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const fetchItems = () => {
    fetch(constants.BASE_URL_API + constants.ITEMS_ENDPOINT) // "http://localhost:8080" + "/items" = http://localhost:8080/items
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };

  useEffect(() => {
    fetchItems();
  }, [setItems]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Edit Items</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.cartItem}>
          {items.map((i, index) => (
            <div className={styles.row} key={index}>
              <Link to={`/products/${i.itemId}`}>
                <img className={styles.pic} src={i.itemImg} alt="" />
              </Link>
              <h4 className={styles.name}>{i.itemName}</h4>

              <div className={styles.price}>
                <h2>${i.itemPrice}</h2>
              </div>
              <button
                className={styles.editButton}
                onClick={() => navigate(`/adminPage/editItems/${i.itemId}`)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditItems;
