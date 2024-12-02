import { useEffect, useState } from "react";
import styles from "./styles.module.css";
// const stylesLabel1 = ;
// const stylesLabel2 =
export default function InputForm({ label = "Primer nombre", action, name , style, type='text'}) {
  const [isFocused, setIsFocused] = useState(false);
  const [Input, setInput] = useState("");

  useEffect(() => {
    if (Input) setIsFocused(true);
  }, [Input, isFocused]);

  return (
    <div  >
      <label  className={styles.label}>
        <p
          style={{
            left: "10px",
            paddingTop: isFocused ? "10px" : "25px",
            fontSize: isFocused ? "14px" : "20px",
            transition: "all 0.3s ease", // Agrega transición suave
          }}
          className={styles.p_text}
        >
          {label} <span style={{ color: "#28A3AF" }}>*</span>
        </p>

        <input
          value={Input}
          name={name}
          style={style}
          onFocus={() => setIsFocused(true)} // Se activa cuando el input tiene foco
          onBlur={() => setIsFocused(false)} // Se activa cuando el input pierde foco
          onChange={(e) => {
            setInput(e.target.value);
            action(e);
          }}
          className={styles.input}
          type={type}
        />
      </label>
    </div>
  );
}
