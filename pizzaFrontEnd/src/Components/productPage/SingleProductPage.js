import React from "react";
import constants from "../util/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../item-card/ItemCard";
import styles from "./singleProductPage.module.css";

const SingleProductPage = ({ handleClick, cart }) => {
  const [products, setProducts] = useState([]);
  const params = useParams();

  const fetchItems = () => {
    fetch(constants.BASE_URL_API + constants.ITEMS_ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}

      {products
        .filter((p) => p.itemId === Number(params.id))
        .map((filteredProduct) => (
          <div key={filteredProduct.itemId}>
            <div>
              <h1>{filteredProduct.itemName}</h1>
            </div>
            <div>
              <div>
                <ItemCard product={filteredProduct} handleClick={handleClick} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleProductPage;
