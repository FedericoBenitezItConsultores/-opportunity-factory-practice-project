//no podemos generar la cotizacion reportar falla

// No podemos continuar con la cotización. Inténtelo nuevamente más tarde.
import React from "react";
import PopupMain from "../PopupMain";
import IconDanger from "../../../../assets/icons/svg/Icon-danger.svg";


export default function WeCanGenerateReportBug({
  btn_misNegocios,

}) {
  return (
    <PopupMain
      img={IconDanger}
      title={<span style={{ color: "#1A1446" }}>¡Ups! Lo sentimos</span>}
      buttons={[
        {
          typeStyle: "primary",
          text: "Ir Mis Negocios",
          action: btn_misNegocios,
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
          Reporta la falla en la mesa de ayuda al correo
          <br />
          
          <b>soporte.aplicativos@libertycolombia.com</b>
          
        </>
      }
      numQuotation={true}
      
    />
  );
}


//  soporte.aplicativos@libertycolombia.com