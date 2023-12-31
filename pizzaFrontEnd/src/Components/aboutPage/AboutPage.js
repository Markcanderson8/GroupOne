import React from "react";
import styles from "./aboutPage.module.css";

const AboutPage = ({ cart }) => {
  return (
    <>
      {cart.length > 0 ? (
        <div className={styles.numberOfItems}>{cart.length}</div>
      ) : (
        <div className={styles.hideNumItems}>{cart.length}</div>
      )}
      <div className={styles.aboutPage}></div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>About The Pizza Shack</h1>
        </div>
        <div className={styles.sayings}>
          <p className={styles.para}>
            A group of friends got together one day and decided that not only do
            they love money, but they love pizza. Anoyone who told them that
            money couldn't buy them happiness, never bought them pizza. So
            ideas, like pizza dough, were tossed around AND The Pizza Shack was
            created because there was no moment in life that couldn't be
            improved with pizza. So let The Pizza Shack help you with the
            greatest trick you can do, and thats make an entire pizza disappear.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
