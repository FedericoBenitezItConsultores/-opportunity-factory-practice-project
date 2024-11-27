import { CotizacionPdf } from "../cotizacion-pdf/CotizacionPdf";
import { FooterDiligenciación } from "../footer-deligenciación/FooterDeligenciacion";
import styles from "./style.module.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.cotizacion}>
          <CotizacionPdf/>
        </div>
        <div>
          <div className={styles.container}>
            <FooterDiligenciación />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={styles.buttonVolver}>Volver</button>
            <button className={styles.button}>Guardar y salir </button>
            <button className={styles.button}>Continuar</button>
          </div>
        </div>
      </footer>
    </>
  );
};
