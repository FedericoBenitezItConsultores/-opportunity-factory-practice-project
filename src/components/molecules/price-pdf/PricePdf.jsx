import React from "react";
import styles from "./style.module.css";
import moduleName from "../../../assets/svg/cotizaccionpdf.svg";

export const CotizacionPdf = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={moduleName} alt="#" />
      </div>
      <div className={styles.parrafo}>
        <a>Generar cotización en PDF</a>
      </div>
    </div>
  );
};
