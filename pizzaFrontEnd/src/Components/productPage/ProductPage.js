import React, { useEffect, useState } from "react";
import constants from "../util/constants";
import ItemCard from "../item-card/ItemCard";
import styles from "./productPage.module.css";
import { Link } from "react-router-dom";

const ProductPage = ({ handleClick, cart }) => {
  const [Items, setItems] = useState([]);

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
  }, []);

  return (
    <div className={styles.pageContainer}>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      {Items.map((item) => (
        <Link key={item.itemId} to={`/products/${item.itemId}`}>
          <div className={styles.cardFont}>
            <ItemCard product={item} handleClick={handleClick} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductPage;
