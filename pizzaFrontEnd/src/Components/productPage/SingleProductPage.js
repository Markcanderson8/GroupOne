import React from "react";
import constants from "../util/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../item-card/ItemCard";

const SingleProductPage = () => {
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
      {products
        .filter((p) => p.itemId === Number(params.id))
        .map((filteredProduct) => (
          <>
            <div>
              <h1>{filteredProduct.itemName}</h1>
            </div>
            <div>
              <div key={filteredProduct.id}>
                <ItemCard product={filteredProduct} />
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default SingleProductPage;
