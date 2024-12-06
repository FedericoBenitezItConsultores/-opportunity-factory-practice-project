import React, { useState, useEffect } from "react";
import Select from "react-select";
import { customStyles } from "./utils/stylesSelect";
import styles from "./SelectBig.module.css";

const SelectBig = ({
  options,
  placeholder = "Ciudad de movilización",
  menuPlacement = "top",
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(null); // Guardar el valor seleccionado

  useEffect(() => {
    if (value) setIsFocused(true);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <p
          style={{
            top: isFocused || value ? "-1px" : "-0px",
            left: "5px",
            marginTop: isFocused || value ? "-1px" : "15px", // Ajuste para que suba
            fontSize: isFocused || value ? "14px" : "20px", // Reducir el tamaño del texto cuando está enfocado
            transition: "all 0.3s ease", // Animación suave
            zIndex: 2, // Asegura que el texto esté por encima del Select
          }}
          className={styles.p_text}
        >
          {placeholder} <span style={{ color: "#28A3AF" }}>*</span>
        </p>

        <Select
          options={options}
          styles={customStyles}
          placeholder={" "}
          onChange={(resp) => {
            onChange(resp);
            setValue(resp); // Guardar el valor seleccionado
          }}
          menuPlacement={menuPlacement}
          isSearchable
          onFocus={() => setIsFocused(true)} // Activar cuando el Select tiene foco
          onBlur={() => setIsFocused(false)} // Desactivar cuando el Select pierde foco
          value={value} // Pasar el valor seleccionado al Select
        />
      </label>
    </div>
  );
};

export default SelectBig;
