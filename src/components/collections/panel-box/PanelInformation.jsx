import React from "react";
import warningIcons from "../../../assets/icons/svg/warningicons.svg";
import styles from "./styles.module.css";

export const PanelInformation = ({
  parrafo1 = "El uso del descuento del cónyuge estará sujeto a posteriores revisiones y validaciones",
  parrafo2 = "Se aplicará siempre el descuento más alto entre conductor y cónyuge.",
}) => {
  return (
    <div className={styles.fallo}>
      <div className={styles.div_inf}>
        <div className={styles.div_inf1}>
          <img className={styles.icons} src={warningIcons} alt="Warning Icon" />
          <p>{parrafo1}</p>
        </div>
        <div className={styles.inf2}>
          <p>{parrafo2}</p>
        </div>
      </div>
    </div>
  );
};
