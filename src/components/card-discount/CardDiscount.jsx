import React from "react";
import styles from "./CardDiscount.module.css";
import Grupo7564 from "../../assets/png/Grupo7564.png";
import Layer2png from "../../assets/png/Layer_2.png";
const CardDiscount = () => {
  return (
    <div className={styles.CardDiscount}>
      <>
        <img className={styles.fondo} src={Grupo7564} alt="Fondo" />
        <img
          className={styles.imagenAmarila}
          src={Layer2png}
          alt="Icono amarillo"
        />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Tienes un descuento</h1>
          <p className={styles.subtitle}>
            De acuerdo al expertis del conductor,
            <br /> el porcentaje de descuento es
          </p>
          <h2 className={styles.discount}>20% OFF</h2>
        </div>
      </>
    </div>
  );
};

export default CardDiscount;
