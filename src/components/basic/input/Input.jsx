import { useEffect, useState } from "react";
import styles from "./input.module.css";

const STYLE_INPUT = {
  prymary: styles.prymary,
  secondary: styles.secondary,
  terciary: styles.terciary,
};
export function Input({
  label = "Primer nombre",
  onChange,
  TypeStyle,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [Input, setInput] = useState("");

  useEffect(() => {
    if (Input) setIsFocused(true);
  }, [Input, isFocused]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <p
          style={{
            left: "10px",
            bottom: isFocused ? "19px" : "3px",
            fontSize: isFocused ? "14px" : "20px",
            transition: "all 0.3s ease",
          }}
          className={styles.p_text}
        >
          {label} <span style={{ color: "#28A3AF" }}>*</span>
        </p>

        <input
          value={Input}
          {...props}
          onFocus={() => setIsFocused(true)} // Se activa cuando el input tiene foco
          onBlur={() => setIsFocused(false)} // Se activa cuando el input pierde foco
          onChange={(e) => {
            setInput(e.target.value);
            onChange(e);
            // typeStyle = "prymary"
          }}
          type={"text"}
          className={styles.inputs}
        />
      </label>
    </div>
  );
}
