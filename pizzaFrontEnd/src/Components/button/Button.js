import { useNavigate } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ name }) => {
  const navigate = useNavigate();

  const pathToPage = (name) => {
    let p = "";
    switch (name) {
      case "Cancel":
        p = "/cart/purchase/cancel";
        break;
      case "Purchase Items":
        p = "/cart/purchase";
        break;
      case "Add Item":
        p = "/adminPage/addItems";
        break;
      case "Edit Item":
        p = "/adminPage/editItems";
        break;
      case "Delete Item":
        p = "/adminPage/deleteItems";
        break;
      case "Add User":
        p = "/adminPage/addUsers";
        break;
      case "Edit User":
        p = "/adminPage/editUsers";
        break;
      case "Delete User":
        p = "/adminPage/deleteUsers";
        break;
      default:
        break;
    }
    return navigate(p);
  };

  return (
    <button className={styles.button} onClick={() => pathToPage(name)}>
      {name}
    </button>
  );
};

export default Button;
