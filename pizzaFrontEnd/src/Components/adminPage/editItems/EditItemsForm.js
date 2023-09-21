import styles from "./editItemsForm.module.css";
import { useState } from "react";
import constants from "../../util/constants";
import { useNavigate, useParams } from "react-router-dom";

const EditItemsForm = ({ cart }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [itemImg, setItemImg] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(constants.BASE_URL_API + constants.ITEMS_ENDPOINT, {
        method: "PUT",
        body: JSON.stringify({
          itemName: itemName,
          itemPrice: itemPrice,
          itemSize: itemSize,
          itemImg: itemImg,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(res);
      // let resJson = await res.json();
      if (res.status === 200) {
        setItemName("");
        setItemPrice("");
        setItemSize("");
        setItemImg("");
        setMessage("Item Created Successfully!!!");
        await sleep(2000);
        console.log(res.json.acce);
        navigate("/products");
      } else {
        setError(true);
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
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
          <div className={styles.text}>Add Item</div>
          <div className={styles.underline}></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <input
                type="text"
                value={params.itemName}
                placeholder="Name"
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <input
                type="text"
                value={params.itemPrice}
                placeholder="Price"
                onChange={(e) => setItemPrice(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <input
                type="text"
                value={params.itemSize}
                placeholder="Size"
                onChange={(e) => setItemSize(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <input
                type="text"
                value={params.itemImg}
                placeholder="Image"
                onChange={(e) => setItemImg(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.submitContainer}>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
          <div className={error ? styles.errMsg : styles.message}>
            {message ? <p>{message}</p> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemsForm;
