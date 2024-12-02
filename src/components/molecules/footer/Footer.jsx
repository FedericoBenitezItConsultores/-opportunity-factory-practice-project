import { CotizacionPdf } from "../price-pdf/PricePdf";
import { FooterDiligenciación } from "../footer-delecation/FooterDelecation";
import styles from "./style.module.css";
import { useState } from "react";
import Modal from "../../molecules/Modal/ModalBase.jsx";
import Spiner from "../Spiner/Spiner.jsx";

export const Footer = () => {
  const [isModalOpenBack, setIsModalOpenBack] = useState(false); 
  const [isModalOpenLogout, setIsModalOpenLogout] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Mis Negocios"); 

  const handleBackClick = () => {
    setButtonText("Usar descuento conductor"); 
    setIsModalOpenBack(true); 
  };

  const handleLogoutClick = () => {
    setButtonText("Mis Negocios"); 
    setIsModalOpenLogout(true); 
  };

  const closeModalBack = () => {
    setIsModalOpenBack(false); 
  };

  const closeModalLogout = () => {
    setIsModalOpenLogout(false); 
  };

  const handleContinue = () => {
    setIsLoading(true); 
  };

  const handleCloseSpinner = () => {
    setIsLoading(false); 
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
            <button className={styles.buttonVolver} onClick={handleBackClick}>
              Volver
            </button>
            <button className={styles.button} onClick={handleLogoutClick}>
              Guardar y salir
            </button>
            <button className={styles.button} onClick={handleContinue}>
              Continuar
            </button>
          </div>
        </div>

        <Modal
          show={isModalOpenBack || isModalOpenLogout} 
          onClose={isModalOpenBack ? closeModalBack : closeModalLogout} 
          title="¡Ups! Lo sentimos" 
          buttonText={buttonText} 
        />

        {isLoading && <Spiner onClose={handleCloseSpinner} />}
      </footer>
    </>
  );
};
