import React, { useState } from "react";
import styles from "../additional-discount/AdditionalDiscount.module.css";
import iconCheck from "../../../../../assets/icons/svg/iconCheck.svg";
import { PanelInformation } from "../../../../../components/collections/panel-box/PanelInformation";
import SelectBig from "../../basics/select-big/SelectBig";

const AdditionalDiscount = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Descuento adicional</h3>
      <div className={styles.checkboxContainer}>
        <div
          onClick={() => setChecked(!checked)}
          className={styles.squareChecked}
        >
          {checked && (
            <img width={"16px"} height={"14px"} src={iconCheck} alt="" />
          )}
        </div>
        <label htmlFor="descuentoConyuge" className={styles.label}>
          Deseo utilizar el descuento de mi cónyuge
        </label>
      </div>
      <div>
        <PanelInformation
          parrafo1="El uso del descuento del cónyuge estará sujeto a posteriores revisiones y validaciones"
          parrafo2={
            checked
              ? "Se aplicará siempre el descuento más alto entre conductor y cónyuge."
              : " "
          }
        />
      </div>
      {checked && (
        <>
          <div className={styles.container_form}>
            <SelectBig />
            <input type="text" />
          </div>
          <p className={styles.info}>
            Ingresa la identificación de tu cónyuge si quieres aplicar su
            descuento
          </p>
          <div className={styles.cuadro}>
            %<br />
            El porcentaje de descuento de tu cónyuge es:
          </div>
        </>
      )}
    </div>
  );
};

export default AdditionalDiscount;
