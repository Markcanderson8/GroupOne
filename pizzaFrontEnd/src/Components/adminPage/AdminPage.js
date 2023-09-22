import React from "react";
import styles from "./adminPage.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../buttonComponent/Button";

const AdminPage = ({ cart }) => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    switch (name) {
      case "Add New Item":
        navigate("/adminPage/addItems");
        break;
      case "Edit Item":
        navigate("/adminPage/editItems");
        break;
      case "Delete Item":
        navigate("/adminPage/deleteItems");
        break;
      case "Add New User":
        navigate("/adminPage/addUsers");
        break;
      case "Edit User":
        navigate("/adminPage/editUsers");
        break;
      case "Delete User":
        navigate("/adminPage/deleteUsers");
        break;
      default:
        break;
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
          <div className={styles.text}>Admin Page</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.submitContainer}>
          <Button name={"Add New Item"} handleClick={handleClick} />
          <Button name={"Edit Item"} handleClick={handleClick} />
        </div>
        <div className={styles.submitContainer}>
          <Button name={"Delete Item"} handleClick={handleClick} />
        </div>
        <div className={styles.submitContainer}>
          <Button name={"Add New User"} handleClick={handleClick} />
          <Button name={"Edit User"} handleClick={handleClick} />
        </div>
        <div className={styles.submitContainer}>
          <Button name={"Delete User"} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
