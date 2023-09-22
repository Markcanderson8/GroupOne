import styles from "./button.module.css";

const Button = ({ name, handleClick }) => {
  return (
    <button
      className={styles.button}
      onClick={(e) => {
        handleClick(e.target.innerHTML);
      }}
    >
      {name}
    </button>
  );
};

export default Button;
