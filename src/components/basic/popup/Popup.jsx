import React from "react";
import styles from "../popup/Popup.module.css";

const Popup = ({ children, heightCard = "533px", tyle = true }) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div style={{ height: heightCard }} className={tyle ? styles.popup : ""}>
        {children}
      </div>
    </>
  );
};

export default Popup;
