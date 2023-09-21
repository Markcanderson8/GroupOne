import styles from "./deleteUser.module.css";

const DeleteUser = ({ cart }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Page Under Construction!!!</div>
          <div className={styles.underline}></div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
