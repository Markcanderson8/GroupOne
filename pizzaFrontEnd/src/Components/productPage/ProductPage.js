import React, { useEffect, useState } from "react";
import constants from "../util/constants";
import ItemCard from "../item-card/ItemCard";
import styles from "./productPage.module.css";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [Items, setItems] = useState([]);

  const fetchItems = () => {
    fetch(constants.BASE_URL_API + constants.ITEMS_ENDPOINT) // "http://localhost:8080" + "/items" = http://localhost:8080/items
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>The Products Page</h1>
      <div className={styles.grid}>
        {Items.map((d, index) => (
          <Link to={`/products/${d.itemId}`}>
            <div key={index} className={styles.cardFont}>
              <ItemCard product={d} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
