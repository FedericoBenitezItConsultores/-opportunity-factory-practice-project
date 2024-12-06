// bhbhb

import React from "react";
import PopupMain from "../PopupMain";
import IconDanger from "../../../../assets/icons/svg/Icon-danger.svg";
export default function WarningReturn({ btn_misNegocios, btn_reintentar }) {
  return (
    <PopupMain
      img={IconDanger}
      title={<span style={{ color: "#1A1446" }}>Apreciado intermediario</span>}
      buttons={[
        {
          typeStyle: "primary",
          text: "Si,regresar",
          action: btn_misNegocios,
        },
        {
          typeStyle: "secondary",
          text: "No,continuar",
          action: btn_reintentar,
        },
      ]}
      text1={
        "Ten en cuenta que una vez regreses a pasos anteriores de la cotización desde este punto, es posible que se generen variaciones en la tarifa entregada inicialmente"
      }
      text2={""}
      numQuotation={false}
      heightCard={"500px"}
      props={{
        errorMessage: "",
        date: "",
      }}
    />
  );
}
