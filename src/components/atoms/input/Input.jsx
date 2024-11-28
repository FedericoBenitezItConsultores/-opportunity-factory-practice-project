import { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";

const Input = ({ value, onChange, placeholder, ...props }) => {
  const [inbputActive, setInputActive] = useState(false);
  const labelRef = useRef(null);

  function clickEnELDOM(e) {
    // console.log(e.composedPath().includes(labelRef.current));
    if (!e.composedPath().includes(labelRef.current)) {
      setInputActive(false);
    } else {
      setInputActive(true);
    }
  }

  useEffect(() => {
    document.addEventListener("click", clickEnELDOM);

    return () => {
      document.removeEventListener("click", clickEnELDOM);
    };
  }, []);

  return (
    <label
      ref={labelRef}
      style={{
        "--top-placeholder": inbputActive ? "-20px" : "0",
      }}
      className={styles.container_input}
    >
      <input className={styles.input} {...props} type="text" />
      <p className={styles.placeholder}>{placeholder}</p>
    </label>
  );
};

export default Input;
