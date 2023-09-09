import { Outlet } from "react-router-dom";
import styles from "../App/App.module.css";

const Layout = () => {
  return (
    <main className={styles.App}>
      <Outlet />
    </main>
  );
};

export default Layout;
