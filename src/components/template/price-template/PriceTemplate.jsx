import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import PlansPrice from "../../organisms/PlansPrice";
import { Footer } from "../../molecules/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Poput from "../../organisms/poput/Poput";
import PoputReload from "../../molecules/poput-reload/PoputReload";
import WatingTime from "../../molecules/popup-wating-time/WatingTime";
export default function PriceTemplate() {
  const [ErrorCotizacion, setErrorCotizacion] = useState(false);
  const [alertaRegresar, setAlertaRegresar] = useState(false);
  const [ErrorCotizacionIrAMisNegocios, setErrorCotizacionIrAMisNegocios] =
    useState(false);
  const [errorGenerar, setErrorGenerar] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setErrorCotizacion(true);
    }, 5000);
  }, []);
  const handelContinuar = () => {
    setErrorGenerar(true);
  };

  const navigate = useNavigate();
  return (
    <>
      {ErrorCotizacion && (
        <>
          <Poput>
            <>
              <PoputReload
                buttons={[
                  {
                    action: () => navigate("/inf-person"),
                    text: "Mis Negocios",
                    style: "button1",
                  },
                  {
                    action: () => {
                      setErrorCotizacion(false);
                      setErrorCotizacionIrAMisNegocios(true);
                    },
                    text: "Reintentar",
                    style: "button",
                  },
                ]}
                parrafo1={
                  <>
                    No podemos continuar con la <b>cotización</b> en este
                    momento debido a problemas técnicos.
                  </>
                }
                parrafo2={
                  <>
                    Por favor, intenta nuevamente a través del botón{" "}
                    <b>Reintentar</b>
                    .
                    <br />
                    Si el error persiste, retoma la cotización en unos minutos
                    desde <br />
                    <b> Mis Negocios.</b>
                  </>
                }
              />
            </>
          </Poput>
        </>
      )}
      {ErrorCotizacionIrAMisNegocios && (
        <>
          <Poput>
            <>
              <PoputReload
                buttons={[
                  {
                    action: () => setErrorCotizacionIrAMisNegocios(false),
                    text: "Ir a Mis Negocios",
                    style: "button1",
                  },
                ]}
                parrafo1={
                  <>
                    No podemos continuar con la <b>cotización</b> en este
                    momento debido a problemas técnicos.
                  </>
                }
                parrafo2={
                  <>
                    Reporta la falla en la mesa de ayuda al correo <br />
                    <b>soporte.aplicativos@libertycolombia.com</b>
                  </>
                }
              />
            </>
          </Poput>
        </>
      )}
      {errorGenerar && (
        <>
          <Poput>
            <>
              <PoputReload
                buttons={[
                  {
                    action: () => navigate("/inf-person"),
                    text: "Mis Negocios",
                    style: "button1",
                  },
                  {
                    action: () => {
                      setErrorCotizacionIrAMisNegocios(true);
                      setErrorGenerar(false);
                    },
                    text: "Reintentar",
                    style: "button",
                  },
                ]}
                parrafo1={
                  <>
                    No podemos generar el documento de la <b>cotización</b> en
                    este momento debido a problemas técnicos.
                  </>
                }
                parrafo2={
                  <>
                    Por favor, intenta nuevamente a través del botón{" "}
                    <b>Reintentar</b>
                    .
                    <br />
                    Si el error persiste, retoma la cotización en unos minutos
                    desde <br />
                    <b> Mis Negocios.</b>
                  </>
                }
              />
            </>
          </Poput>
        </>
      )}
      {alertaRegresar && (
        <>
          <Poput>
            <>
              <PoputReload
                buttons={[
                  {
                    action: () => navigate(-1),
                    text: "Sí, regresar",
                    style: "button1",
                  },
                  {
                    action: () => setAlertaRegresar(false),
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
                    <p>
                      Ten en cuenta que una vez regreses a pasos anteriores de
                    </p>
                    <p>
                      la cotización desde este punto, es posible que se generen
                    </p>
                    <p>variaciones en la tarifa entregada inicialmente</p>
                  </>
                }
              />
            </>
          </Poput>
        </>
      )}
      <WatingTime />
      <div className={styles.div_father}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h1 className={styles.title}>Cotización</h1>
          <p className={styles.sub_title}>
            Listo, te sugerimos un paquete recomendado, sin embargo puedes
            personalizarlo de acuerdo a la necesidad.
          </p>
        </div>
        <div className={styles.div_plan_price}>
          <PlansPrice />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4em",
            marginBottom: "7em",
          }}
        >
          <Footer
            type={4}
            functionContinuar={() => {
              handelContinuar();
            }}
            functionVolver={() => {
              setAlertaRegresar(true);
            }}
            functionGuardar={() => console.log("guardar")}
          />
        </div>
      </div>
    </>
  );
}
