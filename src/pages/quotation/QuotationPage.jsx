import { useNavigate } from "react-router-dom";
import FooterButtons from "../../components/collections/footer-buttons/FooterButtons";
import GenerateInPdf from "./basic/generate-inf-pdf/GenerateInPdf";
import PanelPlans from "./collection/panel-plans/PanelPlans";
import styles from "./styles.module.css";
import WarningReturn from "../../components/collections/popup/cards-pop-up/WarningReturn";
import { useState } from "react";
import WeCanGenerateTryLater from "../../components/collections/popup/cards-pop-up/WeCanGenerateTryLater";
import WeCannotGenerateTheDocument from "../../components/collections/popup/cards-pop-up/WeCannotGenerateTheDocument";
import { SnipperPopup } from "../../components/collections/popup/snipper/SnipperPopup";
import TestPopup from "../../components/collections/test-popup/TestPopup";

export default function QuotationPage() {
  const navigate = useNavigate();

  const [modals, setModals] = useState({
    warningReturn: false,
    weCanGenerateTryLater: false,
    weCannotGenerateTheDocument: false,
    sniper: false,
  });

  const toggleModal = (modal) =>
    setModals((prevState) => ({ ...prevState, [modal]: !prevState[modal] }));

  const handleAction = (action, nextModal) => {
    setModals((prevState) => ({ ...prevState, sniper: true }));
    setTimeout(() => {
      setModals((prevState) => ({
        ...prevState,
        sniper: false,
        [nextModal]: true,
      }));
      if (action === "navigate") {
        navigate("/");
      }
    }, 2000);
  };

  return (
    <div>
      {modals.sniper && <SnipperPopup showText={false} />}

      {modals.weCanGenerateTryLater && (
        <WeCanGenerateTryLater
          btn_misNegocios={() => handleAction("navigate", "")}
          btn_reintentar={() =>
            toggleModal("weCanGenerateTryLater") ||
            handleAction("", "weCannotGenerateTheDocument")
          }
        />
      )}

      {modals.weCannotGenerateTheDocument && (
        <WeCannotGenerateTheDocument
          btn_myBusinesses={() => handleAction("navigate", "")}
        />
      )}

      <PanelPlans />
      <GenerateInPdf />

      {modals.warningReturn && (
        <WarningReturn
          btn_misNegocios={() => handleAction("navigate", "")}
          btn_reintentar={() => toggleModal("warningReturn")}
        />
      )}

      <div className={styles.container_footer_btns}>
        <FooterButtons
          btnContinuar={{ onClick: () => toggleModal("weCanGenerateTryLater") }}
          btnVolver={{ onClick: () => toggleModal("warningReturn") }}
          btnGuardar={{ onClick: () => console.log("btn guardar") }}
        />
      </div>
      <TestPopup />
    </div>
  );
}
