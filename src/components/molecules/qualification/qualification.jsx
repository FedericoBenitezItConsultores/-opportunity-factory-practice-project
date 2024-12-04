import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import IconClose from "../../../assets/svg/IconClose.svg";
import mainLogo from "../../../assets/svg/mainLogo.svg";
import happy from "../../../assets/svg/happy.svg";
import withFilling from "../../../assets/svg/withFilling.svg";
import regularFace from "../../../assets/svg/regularFace.svg";
import withoutFilling from "../../../assets/svg/withoutFilling.svg";
import sad from "../../../assets/svg/sad.svg";
import withoutFillingTwo from "../../../assets/svg/withoutFillingTwo.svg";

export default function Calificasion() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const tiempo = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(tiempo);
  }, []);

  if (!visible) return null;
  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={() => setVisible(false)}>
        <img src={IconClose} alt="#" />
      </div>
      <div>
        <img src={mainLogo} alt="#" />
      </div>
      <div className={styles.parrafo}>
        <p>¿Fue fácil la tarea que acabas de completar? </p>
      </div>
      <div>
        <div className={styles.contenedorCaritas}>
          <div className={styles.carita}>
            <img src={happy} alt="#" />
            <p>Fácil</p>
            <img src={withFilling} alt="#" />
          </div>
          <div className={styles.carita}>
            <img src={regularFace} alt="#" />
            <p>Más o menos</p>
            <img src={withoutFilling} alt="#" />
          </div>
          <div className={styles.carita}>
            <img src={sad} alt="#" />
            <p>Difícil</p>
            <img src={withoutFillingTwo} alt="#" />
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.plaseholder}>Enviar</button>
      </div>
      <div className={styles.parrafito}>
        <p>Powered by Qualtrics</p>
      </div>
    </div>
  );
}
