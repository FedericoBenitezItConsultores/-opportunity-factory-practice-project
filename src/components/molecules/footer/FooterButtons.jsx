import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { useEffect } from "react";

export default function FooterButtons({ type, nextRouter = "/" }) {
  const navigate = useNavigate();
  const action = (act) => {
    let data = JSON.parse(localStorage.getItem("steps"));
    if (data) {
      if (act == "volver") {
        data[type - 1].state = "none";
        navigate(-1);
      }
      if (act == "guardar") {
        data[type - 1].state = "pending";
        navigate("/");
      }
      if (act == "continuar") {
        data[type - 1].state = "completed";
        navigate(nextRouter);
      }
      localStorage.setItem("steps", JSON.stringify(data));
    }
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("steps"));
    if (data) {
      data[type - 1].state = "pending";
      localStorage.setItem("steps", JSON.stringify(data));
    }
  }, [type]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => action("volver")} className={styles.buttonVolver}>
        Volver
      </button>
      <button onClick={() => action("guardar")} className={styles.button}>
        Guardar y salir{" "}
      </button>
      <button onClick={() => action("continuar")} className={styles.button}>
        Continuar
      </button>
    </div>
  );
}