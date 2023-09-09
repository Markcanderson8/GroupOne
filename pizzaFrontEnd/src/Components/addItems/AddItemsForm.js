import React, { useState } from "react";
import styles from "./addItem.module.css";
import constants, { ITEMS_ENDPOINT } from "../util/constants";

const LoginSignup = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [itemImg, setItemImg] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(constants.BASE_URL_API + ITEMS_ENDPOINT, {
        method: "POST",
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
      if (res.status === 201) {
        setItemName("");
        setItemPrice("");
        setItemSize("");
        setItemImg("");
        setMessage("Item Created Successfully!!!");
        console.log(res.json.acce);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
              value={itemName}
              placeholder="Name"
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={itemPrice}
              placeholder="Price"
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={itemSize}
              placeholder="Size"
              onChange={(e) => setItemSize(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={itemImg}
              placeholder="Image"
              onChange={(e) => setItemImg(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.submitContainer}>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
        <div className={styles.message}>
          {message ? <p>{message}</p> : null}
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
