import React, { useRef, useEffect, useState } from "react";
import styles from "./Spiner.module.css";
import liberty from "../../../assets/svg/liberty-arm-yellow.svg";
import loader from "../../../assets/svg/loader.svg";

const Spiner = ({ onClose }) => {
  const imageRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        onClose();
      }
    };
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 5000);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.icon} ref={imageRef}>
        <img src={liberty} alt="liberty" />
      </div>
      <div className={styles.loader}>
        <img src={loader} alt="loader" className={styles.loaderImage} />
      </div>

      <div className={styles.showMessage1}>
      {showMessage && (
        <div className={styles.message}>
          <p className={styles.showMessage}>Este proceso puede tardar algunos segundos más, </p>
          <p className={styles.showMessage}>por favor espera mientras seguimos realizando la consulta.</p>
        </div>
      )}

      </div>

    </div>
  );
};

export default Spiner;
