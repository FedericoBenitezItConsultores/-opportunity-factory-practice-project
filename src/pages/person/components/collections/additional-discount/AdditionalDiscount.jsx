import React, { useState } from "react";
import styles from "../additional-discount/AdditionalDiscount.module.css";
import iconCheck from "../../../../../assets/icons/svg/iconCheck.svg";
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
      {/* {checked && (
        <>
          <h1>jdsfeshrfeiuh</h1>
        </>
      )} */}
    </div>
  );
};

export default AdditionalDiscount;
