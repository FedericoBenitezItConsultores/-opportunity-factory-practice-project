import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import styles from "./input.module.css";
import imgWarning from "../../../../../assets/icons/svg/warningError.svg";

export const Input = React.forwardRef(
  (
    {
      label = "Primer nombre",
      onChange,
      TypeStyle = "primary",
      textError = "Este campo no puede quedar vacío",
      rules = {}, // Aquí pasaremos las reglas de validación
      control, // Se pasa el control para react-hook-form
      name, // Se pasa el nombre para react-hook-form
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [Input, setInput] = useState("");

    useEffect(() => {
      if (Input) setIsFocused(true);
    }, [Input]);

    return (
      <div className={styles[TypeStyle]}>
        {/* Aquí se usa Controller para manejar el estado con react-hook-form */}
        <Controller
          name={name}
          control={control}
          rules={rules} // Pasamos las reglas de validación
          render={({ field, fieldState }) => (
            <>
              {fieldState?.error && (
                <div className={styles.container_text_error}>
                  <img src={imgWarning} alt="Error" />
                  <p>{fieldState?.error.message}</p>
                </div>
              )}
              <label className={styles.label}>
                <p
                  style={{
                    left: "10px",
                    bottom: isFocused || Input ? "19px" : "8.5px",
                    fontSize: isFocused || Input ? "14px" : "20px",
                    transition: "all 0.3s ease",
                  }}
                  className={styles.p_text}
                >
                  {label} <span style={{ color: "#28A3AF" }}>*</span>
                </p>

                <input
                  {...field} // Conectamos react-hook-form con el input
                  ref={ref} // La referencia se pasa aquí
                  value={Input}
                  {...props}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (onChange) onChange(e); // Evitar errores si onChange no está definido
                  }}
                  className={styles.inputs}
                />
              </label>
            </>
          )}
        />
      </div>
    );
  }
);
