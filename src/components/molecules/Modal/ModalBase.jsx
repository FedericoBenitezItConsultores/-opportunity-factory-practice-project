import React from "react";
import styles from "../Modal/Modal.module.css";
import AlertIcon from "../../../assets/Alert.svg";
import Modal from "@mui/material/Modal";

const ModalBase = ({ show, onClose, title, buttonText }) => {
  if (!show) return null;

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      BackdropProps={{
        className: styles.modalBackdrop,
      }}
    >
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <img className={styles.alertIcon} src={AlertIcon} alt="Alerta" />
          <h2 className={styles.modalTitle}>{title}</h2>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.modalText}>
            No podemos continuar con la{" "}
            <span className={styles.bold}>cotización</span> en este momento
            debido a problemas técnicos.
          </p>
          <p className={styles.modalText}>
            Por favor, intenta nuevamente a través del botón{" "}
            <span className={styles.bold}>Reintentar.</span> <br /> Si el error
            persiste, retoma la cotización en unos minutos desde <br />
            <span className={styles.bold}>Mis Negocios</span>.
          </p>
          <p className={styles.modalText}>
            Número de cotización{" "}
            <span className={styles.quoteNumber}>100030819</span>
          </p>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.secondaryButton}>
            {buttonText || "Mis Negocios"}  
          </button>
          <button className={styles.primaryButton}>Reintentar</button>
        </div>
        <div className={styles.modalExtraInfo}>
          <p className={styles.additionalText}>
            Para obtener información adicional comunícate con la mesa de ayuda
            al correo <br />
            <a
              href="mailto:soporte.aplicativos@libertycolombia.com"
              className={styles.contactLink}
            >
              soporte.aplicativos@libertycolombia.com
            </a>
          </p>

          <p className={styles.errorDetails}>
            Código de error: 1234 - Paso 3: Información personal <br />{" "}
            21/Jul/2022 - 13:15
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBase;
