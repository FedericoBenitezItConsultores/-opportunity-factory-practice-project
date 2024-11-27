import { FooterDiligenciación } from "../footerDeligenciación/FooterDeligenciacion";
import styles from "./style.module.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className={styles.container}>
            <FooterDiligenciación />
          </div>
          <div>
            <button className={styles.buttonVolver}>Volver</button>
            <button className={styles.button}>Guardar y salir </button>
            <button className={styles.button}>Continuar</button>
          </div>
        </div>
      </footer>
    </>
  );
};
