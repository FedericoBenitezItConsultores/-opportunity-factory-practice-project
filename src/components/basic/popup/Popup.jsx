
import React from "react";
import styles from "../popup/Popup.module.css";

const Popup = ({ children }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {children}
      </div>
    </div>
  );
};

export default Popup;

