import { CotizacionPdf } from "../price-pdf/PricePdf";
import { FooterDiligenciación } from "../footer-delecation/FooterDelecation";
import styles from "./style.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal1/ModalBase.jsx";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    console.log("Sesión cerrada");
    setIsModalOpen(false);
  };

  return (
    <>
      <footer>
        <div className={styles.cotizacion}>
          <CotizacionPdf />
        </div>
        <div>
          <div className={styles.container}>
            <FooterDiligenciación />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={styles.buttonVolver}>Volver</button>
            <button className={styles.button} onClick={handleLogoutClick}>
              Guardar y salir{" "}
            </button>
            <button className={styles.button}>Continuar</button>
          </div>
        </div>
        <Modal
          show={isModalOpen}
          onClose={closeModal}
          title="¡Ups! Lo sentimos "
        />
      </footer>
    </>
  );
};
