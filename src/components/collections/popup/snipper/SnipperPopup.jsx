import React, { useRef } from "react";
import liberty from "../../../../assets/icons/svg/liberty-arm-yellow.svg";
import loader from "../../../../assets/icons/svg/loader.svg";
import styles from "./SnipperPopup.module.css";

export const SnipperPopup = ({ showText = true }) => {
  const imageRef = useRef(null);

  return (
    <div className={styles.overlay}>
      <div className={styles.icon} ref={imageRef}>
        <img src={liberty} alt="liberty" />
      </div>
      <div className={styles.loader}>
        <img src={loader} alt="loader" className={styles.loaderImage} />
      </div>

      <div className={styles.showMessage1}>
        {showText && (
          <div className={styles.message}>
            <p className={styles.showMessage}>
              Este proceso puede tardar algunos segundos más,{" "}
            </p>
            <p className={styles.showMessage}>
              por favor espera mientras seguimos realizando la consulta.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
