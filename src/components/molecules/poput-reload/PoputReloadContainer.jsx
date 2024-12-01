import React, { useState } from "react";
import PoputReload from "./PoputReload";
import Poput from "../../organisms/poput/Poput";
import { useStateManager } from "react-select";

export default function PoputReloadContainer() {
  const [popup, setPopup] = useState(true);
  if (popup)
    return (
      <Poput>
        {/* pagina 1, pagina 20, pagina 57 */}
        <>
          <PoputReload
            buttons={[
              {
                action: () => setPopup(!popup),
                text: "Mis Negocios",
                style: "button1",
              },
              {
                action: () => setPopup(!popup),
                text: "Reintentar",
                style: "button",
              },
            ]}
            parrafo1={
              <>
                No podemos continuar con la <b>cotización</b> en este momento
                debido a problemas técnicos.
              </>
            }
            parrafo2={
              <>
                Por favor, intenta nuevamente a través del botón{" "}
                <b>Reintentar</b>
                .
                <br />
                Si el error persiste, retoma la cotización en unos minutos desde{" "}
                <br />
                <b> Mis Negocios.</b>
              </>
            }
          />
        </>
        {/* pagina 30, pagina 58 */}
        <>
          {/* <PoputReload
          buttons={[
            {
              action: ()=>setPopup(!popup),
              text: "Ir a Mis Negocios",
              style: "button1",
            },
          ]}
          parrafo1={
            <>
              No podemos continuar con la <b>cotización</b> en este momento
              debido a problemas técnicos.
            </>
          }
          parrafo2={
            <>
              Reporta la falla en la mesa de ayuda al correo <br />
              <b>soporte.aplicativos@libertycolombia.com</b>
            </>
          }
        /> */}
        </>
        {/* pagina 47 */}
        <>
          {/* <PoputReload
          buttons={[
            {
              action: ()=>setPopup(!popup),
              text: "Mis Negocios",
              style: "button1",
            },
            {
              action: ()=>setPopup(!popup),
              text: "Reintentar",
              style: "button",
            },
          ]}
          parrafo1={
            <>
              No podemos generar el documento de la <b>cotización</b> en este
              momento debido a problemas técnicos.
            </>
          }
          parrafo2={
            <>
              Por favor, intenta nuevamente a través del botón <b>Reintentar</b>
              .
              <br />
              Si el error persiste, retoma la cotización en unos minutos desde{" "}
              <br />
              <b> Mis Negocios.</b>
            </>
          }
        /> */}
        </>
        {/* pagina 64 */}
        <>
          {/* <PoputReload
          buttons={[
            {
              action: ()=>setPopup(!popup),
              text: "Mis Negocios",
              style: "button1",
            },
          ]}
          parrafo1={
            <>
              No podemos generar el documento de la <b>cotización</b> en este
              momento debido a problemas técnicos.
            </>
          }
          parrafo2={
            <>
              Reporta la falla en la mesa de ayuda al correo <br />
              <b>soporte.aplicativos@libertycolombia.com</b>
            </>
          }
        /> */}
        </>
        {/* pagina 65 */}
        <>
          {/* <PoputReload
          buttons={[
            {
              action: ()=>setPopup(!popup),
              text: "Sí, regresar",
              style: "button1",
            },
            {
              action: ()=>setPopup(!popup),
              text: "No, continuar",
              style: "button",
            },
          ]}
          stylesParrafo1={{
            height: "90px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}
          title={"Apreciado intermediario,"}
          num_cotizacion={false}
          parrafo1={
            <>
              <p>Ten en cuenta que una vez regreses a pasos anteriores de</p>
              <p>la cotización desde este punto, es posible que se generen</p>
              <p>variaciones en la tarifa entregada inicialmente</p>
            </>
          }
        /> */}
        </>
      </Poput>
    );
}
