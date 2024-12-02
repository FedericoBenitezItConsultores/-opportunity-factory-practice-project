import React, { useState } from "react";
import styles from "./style.module.css";
import warningIcons from "../../../assets/svg/warningicons.svg";

export const AdditionalDiscount = () => {
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar el popup

  const handleCheckboxChange = (e) => {
    setShowPopup(e.target.checked); // Muestra el popup si el checkbox está marcado
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.titulo}>Descuento adicional</p>
      </div>
      <div className={styles.checkboxGroups}>
        <form>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              onChange={handleCheckboxChange} // Control del checkbox
            />
            <p className={styles.titulo2}>
              Deseo utilizar el descuento de mi cónyuge
            </p>
          </div>
        </form>
      </div>
      <div>
        <div className={styles.fallo}>
          <div className={styles.div_inf}>
            <div className={styles.div_inf1}>
              <img
                className={styles.icons}
                src={warningIcons}
                alt="Warning Icon"
              />
              <p>
                El uso del descuento del cónyuge estará sujeto a posteriores
                revisiones y validaciones
              </p>
            </div>
            <div className={styles.inf2}>
              {" "}
              <p>
                Se aplicará siempre el descuento más alto entre conductor y
                cónyuge.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className={styles.popup}>
                   <div className={styles.lineContainer}></div> 
          <div className={styles.popupContent}>
            <p>
              Ingresa la identificación de tu cónyuge si quieres aplicar su
              descuento
            </p>
          </div>
          <div className={styles.inputContainer}>
            <select id="opciones" name="opciones" className={styles.selectBox}>
              <option value="opcion1">Cédula de extranjería</option>
              <option value="opcion2">Carnet Diplomático</option>
              <option value="opcion3">Pasaporte</option>
              <option value="opcion4">Tarjeta de Identidad</option>
              <option value="opcion5">Registro Civil</option>
              <option value="opcion6">
                Número Único de Identificación Personal (NIUP)
              </option>
            </select>
            <input
              type="number"
              placeholder="Número de identificación"
              className={styles.inputBox}
            />
          </div>
          <div className={styles.cuadro}>%<br/>El porcentaje de descuento de tu cónyuge es:</div>
        </div>
      )}
    </div>
  );
};
