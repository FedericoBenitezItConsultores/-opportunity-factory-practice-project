import React from "react";
import styles from "../footer-popup/FooterPopup.module.css";

const FooterPopup = ({
  infoMessage = "Para obtener información adicional comunícate con la mesa de ayuda al correo", 
  email = "soporte.aplicativos@libertycolombia.com",  
  errorMessage = "Código de error: 1234 - Paso 3: Información personal",
  date = "21/Jul/2022 - 13:15",
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p className={styles.infoMessage}>{infoMessage}</p>
        <a href={`mailto:${email}`} className={styles.email}>
          {email}
        </a>
        <p className={styles.errorMessage}>{errorMessage}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default FooterPopup;
