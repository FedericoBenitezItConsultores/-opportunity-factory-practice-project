//No podemos generar el documento intentelo mas tarde
import React from "react";
import PopupMain from "../PopupMain";
import IconDanger from "../../../../assets/icons/svg/Icon-danger.svg";
import FooterPopup from "../../../basic/popup/footer-popup/FooterPopup";
export default function WeCannotGenerateTheDocument({ btn_myBusinesses }) {
  return (
    <PopupMain
      img={IconDanger}
      title={<span style={{ color: "#1A1446" }}>¡Ups! Lo sentimos</span>}
      buttons={[
        {
          typeStyle: "primary",
          text: "Mis Negocios",
          action: btn_myBusinesses,
        },
      ]}
      text1={
        <>
          No podemos generar el documento de la <b>cotización</b> en este
          momento debido a problemas técnicos.
        </>
      }
      text2={
        <>
          Reporta la falla en la mesa de ayuda al coreo <br />
          <b>soporte.aplicativos@libertycolombia.com</b> <br />
        </>
      }
      props={{
        infoMessage: "",
        email: "",
      }}
     numQuotation={true}
    />
  );
}
