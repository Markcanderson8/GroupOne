import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import constants from "../../util/constants";
import styles from "./singleItemEdit.module.css";
import EditItemsForm from "../editItems/EditItemsForm";

const SingleItemEdit = ({ cart }) => {
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
              <div>
                <EditItemsForm
                  productName={filteredProduct.itemName}
                  productPrice={filteredProduct.itemPrice}
                  productSize={filteredProduct.itemSize}
                  productImg={filteredProduct.itemImg}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleItemEdit;
