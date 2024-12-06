// No podemos continuar con la cotización. Inténtelo nuevamente más tarde.
import React from "react";
import PopupMain from "../PopupMain";
import IconDanger from "../../../../assets/icons/svg/Icon-danger.svg";
export default function ContinueWithQuoteTryLater({
  btn_misNegocios,
  btn_reintentar,
}) {
  return (
    <PopupMain
      img={IconDanger}
      title={<span style={{ color: "#1A1446" }}>¡Ups! Lo sentimos</span>}
      buttons={[
        {
          typeStyle: "primary",
          text: "Mis negocios",
          action: btn_misNegocios,
        },
        {
          typeStyle: "secondary",
          text: "Reintentar",
          action: btn_reintentar,
        },
      ]}
      text1={
        <>
          No podemos continuar con la <b>cotización</b> en este momento debido a
          problemas técnicos.
        </>
      }
      text2={
        <>
          Por favor, intenta nuevamente a través del botón <b>Reintentar.</b>{" "}
          <br />
          Si el error persiste, retoma la cotización en unos minutos desde{" "}
          <br />
          <b>Mis Negocios.</b>
        </>
      }
      numQuotation={true}
    />
  );
}
