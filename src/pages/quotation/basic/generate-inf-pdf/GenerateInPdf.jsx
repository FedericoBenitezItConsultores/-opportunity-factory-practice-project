import React from "react";
import styles from "./style.module.css";
import icon_photocopier from "../../../../assets/icons/svg/icon_photocopier.svg";

export default function GenerateInPdf() {
  return (
    <div className={styles.container1}>
      <div className={styles.container}>
        <div>
          <img src={icon_photocopier} alt="#" />
        </div>
        <div className={styles.parrafo}>
          <a>Generar cotización en PDF</a>
        </div>
      </div>
    </div>
  );
}
