import React from "react";
import styles from "../popup/Popup.module.css";

const Popup = ({ children, heightCard='613px' }) => {
  console.log(heightCard)
  return (
    <>
      <div className={styles.overlay}></div>
      <div style={{ height: heightCard }} className={styles.popup}>
        {children}
      </div>
    </>
  );
};

export default Popup;
