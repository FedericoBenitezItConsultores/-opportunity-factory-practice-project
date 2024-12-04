import React, { useState, useEffect } from "react";
import styles from "../../Modal/SessionTimeout/SessionTimeout.module.css";
import Reloj from "../../../../assets/Reloj.svg";
import Cerrar from "../../../../assets/Cerrar.svg";
import Esclamacion from "../../../../assets/Esclamacion.svg";
import { Modal } from "@mui/material";


const SessionTimeout = ({
  show,
  onClose,
  setTimeLeft,
  setUserActive,
  setSessionEnded,
  timeLeft,
  sessionEnded,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleContinueSession = () => {
    setTimeLeft(138);
    setIsModalVisible(false);
    setUserActive(true);
  };

  const handleSessionEnd = () => {
    setIsModalVisible(false);
    setSessionEnded(true);
  };

  return (
    <>
      <Modal
        open={show}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        BackdropProps={{
          className: styles.modalBackdrop,
        }}
      >
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.cerrar}>
              <img
                src={Cerrar}
                alt="Cerrar"
                className={styles.Cerrar}
                onClick={onClose}
              />
            </div>

            <div className={styles.leftSection}>
              <img src={Reloj} alt="Reloj" className={styles.reloj} />
            </div>
            <h2 className={styles.title}>
              ¿Estás ahí? Tu sesión finalizará en:
            </h2>
            <div className={styles.timer}>{formatTime(timeLeft)}</div>
            <p>
              <span className={styles.description}>
                Si deseas continuar en sesión,
                <br />
                presiona el botón{" "}
              </span>
              <span className={styles.description2}>"Continuar"</span>
            </p>
            <div className={styles.buttons}>
              <button className={styles.closeButton} onClick={handleSessionEnd}>
                Cerrar sesión
              </button>
              <button className={styles.continueButton} onClick={onClose}>
                Continuar
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {sessionEnded && (
        <div className={styles.overlay}>
          <div className={styles.modal2}>
            <div className={styles.cerrar}>
              <img
                src={Cerrar}
                alt="Cerrar"
                className={styles.Cerrar}
                onClick={onClose}
              />
            </div>
            <div className={styles.leftSection}>
              <img
                src={Esclamacion}
                alt="Esclamacion"
                className={styles.esclamacion}
              />
            </div>
            <h2 className={styles.title}>Tu sesión ha finalizado.</h2>

            <div className={styles.buttons2}>
              <button
                className={styles.closeButton}
                onClick={() => setSessionEnded(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SessionTimeout;
