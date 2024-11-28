import React from "react";
import styles from "./ProgressBar.module.css";
import Triangle from "../../assets/Triangle.png";

const ProgressBar = () => {
  const steps = [
    "Validación de datos",
    "Información del vehículo",
    "Información personal",
    "Cotización", 
  ];

  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <span className={styles.title}>Cotización</span>
        <strong className={styles.id}>100030819</strong>
      </div>
      <div className={styles.container2}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepContainer}>
            <div
              className={`${styles.stepNumber} ${styles[`stepNumber${index + 1}`]} ${
                index <= 1 ? styles.completed : styles.pending
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`${styles.stepText} ${index === 3 ? styles.cotizacionFinal : ""}`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`${styles.divider} ${index === 2 ? styles.divider3 : ""}`}
              ></div>
            )}
          </div>
        ))}
        <img src={Triangle} alt="Triangle" className={styles.triangle} />
      </div>
    </div>
  );
};

export default ProgressBar;
