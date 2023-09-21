import styles from "./deleteItem.module.css";
import { Link } from "react-router-dom";
import trashCan from "../../../images/trash-can-solid.svg";
import { useState, useEffect } from "react";
import constants from "../../util/constants";

const DeleteItem = ({ cart }) => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("");

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

  const deleteItem = (id) => {
    fetch(constants.BASE_URL_API + constants.ITEMS_ENDPOINT + `/${id}`, {
      method: "DELETE",
    })
      .then(() => setStatus("Delete Successful"))
      .then(() => console.log(id));

    const arr = items.filter((item) => item.itemId !== id);
    setItems(arr);
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Page Under Construction!!!</div>
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
                className={styles.deleteButton}
                onClick={() => deleteItem(i.itemId)}
              >
                <img
                  className={styles.trash}
                  src={trashCan}
                  alt="trash can icon"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
