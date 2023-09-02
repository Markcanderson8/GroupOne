import React, { useEffect, useState } from "react";
import constants from "../../util/constants";
import ItemCard from "../../item-card/ItemCard";
import styles from "./productPage.module.css";

const ProductPage = () => {
  const [Items, setItems] = useState([]);

  const fetchItems = () => {
    fetch(constants.BASE_URL_API + constants.ITEMS_ENDPOINT)
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
          <div key={index}>
            <ItemCard
              itemId={d.itemId}
              itemImg={d.itemImg}
              itemName={d.itemName}
              itemSize={d.itemSize}
              itemPrice={d.itemPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
