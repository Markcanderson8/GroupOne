import React from "react";
import styles from "./Header.module.css";
import NavBar from "../navBar/NavBar";

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
