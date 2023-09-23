import styles from "./button.module.css";

const Button = (props) => {
  return <button className={styles.button}>{props.name}</button>;
};

export default Button;
