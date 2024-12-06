import { useEffect, useState } from "react";
import styles from "./input.module.css";
import imgWarning from "../../../assets/icons/svg/warningError.svg";
export function Input({
  label = "Primer nombre",
  onChange,
  TypeStyle = "primary",
  textError = "Este campo no puede quedar vacío",
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [Input, setInput] = useState("");

  useEffect(() => {
    if (Input) setIsFocused(true);
  }, [Input, isFocused]);

  return (
    <div className={styles[TypeStyle]}>
      <div className={styles.container_text_error}>
        <img src={imgWarning} alt="" />
        <p>{textError}</p>
      </div>
      <label className={styles.label}>
        <p
          style={{
            left: "10px",
            bottom: isFocused ? "19px" : "8.5px",
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => {
            setInput(e.target.value);
            onChange(e);
          }}
          type={"text"}
          className={styles.inputs}
        />
      </label>
    </div>
  );
}
