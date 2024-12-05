import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import IconCerrar from "../../../../assets/icons/svg/iconsCerrar.svg";
import mainLogo from "../../../../assets/icons/svg/iconsLiberty.svg";
import happy from "../../../../assets/icons/svg/happy.svg";
import botonSombreado from "../../../../assets/icons/svg/botonSombreado.svg";
import regularFace from "../../../../assets/icons/svg/regularFace.svg";
import botonFondoBlanco from "../../../../assets/icons/svg/botonFondoBlanco.svg";
import sad from "../../../../assets/icons/svg/sad.svg";
import botonFondoBlancoDerecho from "../../../../assets/icons/svg/botonFondoBlancoDerecho.svg";

export default function FormEaseFeedback() {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("facil"); // Estado para la opción seleccionada

  useEffect(() => {
    const tiempo = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(tiempo);
  }, []);

  if (!visible) return null;

  const buttonImage = {
    facil: selectedOption === "facil" ? botonSombreado : botonFondoBlanco,
    masomenos:
      selectedOption === "masomenos" ? botonSombreado : botonFondoBlanco,
    dificil:
      selectedOption === "dificil" ? botonSombreado : botonFondoBlancoDerecho,
  };
  const handeleSubmit =()=>{
    setVisible(false)
  }
  if (visible)
    return (
      <div className={styles.container}>
        <div className={styles.close} onClick={() => setVisible(false)}>
          <img src={IconCerrar} alt="#" />
        </div>
        <div>
          <img src={mainLogo} alt="#" />
        </div>
        <div className={styles.parrafo}>
          <p>¿Fue fácil la tarea que acabas de completar? </p>
        </div>
        <div>
          <div className={styles.contenedorCaritas}>
            <div
              className={styles.carita}
              onClick={() => setSelectedOption("facil")}
            >
              <img src={happy} alt="Carita feliz" />
              <p>Fácil</p>
              <img
                src={buttonImage.facil}
                alt="Botón Fácil"
                className={styles.botonCarita}
              />
            </div>
            <div
              className={styles.carita}
              onClick={() => setSelectedOption("masomenos")}
            >
              <img src={regularFace} alt="Carita regular" />
              <p>Más o menos</p>
              <img
                src={buttonImage.masomenos}
                alt="Botón Más o menos"
                className={styles.botonCarita}
              />
            </div>
            <div
              className={styles.carita}
              onClick={() => setSelectedOption("dificil")}
            >
              <img src={sad} alt="Carita triste" />
              <p>Difícil</p>
              <img
                src={buttonImage.dificil}
                alt="Botón Difícil"
                className={styles.botonCarita}
              />
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button
            className={styles.plaseholder}
            onClick={() => handeleSubmit()}
          >
            Enviar
          </button>
        </div>
        <div className={styles.parrafito}>
          <p>Powered by Qualtrics</p>
        </div>
      </div>
    );
}
