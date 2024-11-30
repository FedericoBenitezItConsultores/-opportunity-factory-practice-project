import React from "react";
import styles from "./styles.module.css";

export default function FooterPoput() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTextt}>
        <p>
          Para obtener información adicional comunícate con la mesa de ayuda al
          correo
        </p>
      </div>
      <div>
        <a
          href="mailto:Soporte.aplicativos@libertycolombia.com"
          className={styles.footerLink}
        >
          Soporte.aplicativos@libertycolombia.com
        </a>
      </div>
      <div>
        <p className={styles.footerText}>
          Código de error 1234 - Paso 3: información personal
        </p>
        <p className={styles.footerText}>21/Jul/2022 - 13:14</p>
      </div>
    </div>
  );
}
