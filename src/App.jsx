import React, { useState } from "react";
import Modal from "../src/components/molecules/Modal/Modal.jsx";

const Modal= () => {
  const [showPopup, setShowPopup] = useState(true); 

  const handleClose = () => {
    setShowPopup(false); 
  };

  const handleRetry = () => {
    console.log("Intentar de nuevo...");

  };

  return (
    <div>
      <Popup show={showPopup} onClose={handleClose} onRetry={handleRetry} />
      <button onClick={() => setShowPopup(true)}>Mostrar Popup</button>{" "}
    
    </div>
  );
};

export default Modal;
