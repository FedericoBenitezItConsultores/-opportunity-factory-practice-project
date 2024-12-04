import React, { useState } from "react";
import styles from "../Modal1/Modal.module.css";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const ModalReu = ({ show, onClose, title, children, buttons }) => {
  const navigate = useNavigate();

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
        {title && (
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{title}</h2>
          </div>
        )}
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={
                button.variant === "primary"
                  ? styles.primaryButton
                  : styles.secondaryButton
              }
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalReu;
