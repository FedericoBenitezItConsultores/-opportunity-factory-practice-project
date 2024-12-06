// No podemos continuar con la cotización. reportar falla.
import React from 'react'
import PopupMain from '../PopupMain'
import IconDanger from "../../../../assets/icons/svg/Icon-danger.svg";

export default function ContinueWithQuoteReportBug({
  btn_myBusinesses
}) {
  return (
    <PopupMain
    img={IconDanger}
      title={<span style={{ color: "#1A1446" }}>¡Ups! Lo sentimos</span>}
      buttons={[
        {
          typeStyle: "primary",
          text: "Ir a Mis Negocios",
          action: btn_myBusinesses,
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
          Reporta la falla en la mesa de ayuda al coreo{" "}
          <br />
          <b>soporte.aplicativos@libertycolombia.com</b>{" "}
          <br />
        </>
      }
      numQuotation={true}
    />
  )
}
