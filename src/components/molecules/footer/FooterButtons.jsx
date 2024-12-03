import styles from "./style.module.css";

export default function FooterButtons({ handleSubmit }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className={styles.buttonVolver}>Volver</button>
      <button className={styles.button}>Guardar y salir </button>
      <button onClick={handleSubmit} className={styles.button}>Continuar</button>
    </div>
  );
}
