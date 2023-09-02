import React from "react";
import { useState, useEffect } from "react";
import constants from "../util/constants";
import { useParams } from "react-router-dom";
import ItemCard from "../item-card/ItemCard";

const SingleItemPage = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();

  const fetchItems = () => {
    fetch(constants.BASE_URL_API + constants.ITEMS_ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {products
        .filter((p) => p.itemId === Number(params.itemId))
        .map((filteredProduct) => (
          <>
            <div>
              <h1>{filteredProduct.itemName}</h1>
            </div>
            <div>
              <div key={filteredProduct.itemId}>
                <ItemCard
                  itemName={filteredProduct.itemName}
                  itemImg={filteredProduct.itemImg}
                  itemSize={filteredProduct.itemSize}
                  itemPrice={filteredProduct.itemPrice}
                />
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default SingleItemPage;
