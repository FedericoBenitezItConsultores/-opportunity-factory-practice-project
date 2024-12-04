import { CotizacionPdf } from "../price-pdf/PricePdf";
import { FooterDiligenciación } from "../footer-delecation/FooterDelecation";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal1/ModalBase.jsx";
import Spiner from "../Spiner/Spiner.jsx";
import { useNavigate } from "react-router-dom";

export const Footer = ({ soloModal = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenBack, setIsModalOpenBack] = useState(false);
  const [isModalOpenLogout, setIsModalOpenLogout] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Mis Negocios");
  const navigate = useNavigate();
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleLogout = () => {
  //   console.log("Sesión cerrada");
  //   setIsModalOpen(false);
  // };

  const handleBackClick = () => {
    setButtonText("Usar descuento conductor");
    setIsModalOpenBack(true);
    setIsLoading(true);
    setTimeout(() => {
      navigate("/inf-person");
    }, 2000);
  };

  // const handleLogoutClick = () => {
  //   setButtonText("Mis Negocios");
  //   setIsModalOpenLogout(true);
  // };

  const closeModalBack = () => {
    setIsModalOpenBack(false);
  };

  const closeModalLogout = () => {
    setIsModalOpenLogout(false);
  };

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  const handleCloseSpinner = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
  }, []);
  if (soloModal)
    return (
      <>
        {isModalOpen && (
          <Modal
            ruteNext="/inf-person"
            show={isModalOpenBack || isModalOpenLogout}
            onClose={isModalOpenBack ? closeModalBack : closeModalLogout}
            title="¡Ups! Lo sentimos"
            buttonText={buttonText}
          />
        )}
      </>
    );
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
            <button className={styles.button}>Guardar y salir</button>
            <button className={styles.button} onClick={handleContinue}>
              Continuar
            </button>
          </div>
        </div>

        {isModalOpen && (
          <Modal
            ruteNext="/price"
            show={isModalOpenBack || isModalOpenLogout}
            onClose={isModalOpenBack ? closeModalBack : closeModalLogout}
            title="¡Ups! Lo sentimos"
            buttonText={buttonText}
          />
        )}

        {isLoading && <Spiner onClose={handleCloseSpinner} />}
      </footer>
    </>
  );
};
