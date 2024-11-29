import styles from "./style.module.css";

export default function FooterButtons() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className={styles.buttonVolver}>Volver</button>
      <button className={styles.button}>Guardar y salir </button>
      <button className={styles.button}>Continuar</button>
    </div>
  );
}
