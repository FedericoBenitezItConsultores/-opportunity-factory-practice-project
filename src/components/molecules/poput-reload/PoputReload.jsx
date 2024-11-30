import FooterPoput from "../../molecules/footer-pooput/FooterPoput";
import styles from "./styles.module.css";
import warning from "../../../assets/svg/Grupo5094.svg";

export default function PoputReload({
  continuarCotizacion = true,
  mostrarParrafos = false, // Controla qué texto principal se muestra
  modoInformativo = false, // Controla el tipo de mensaje adicional
}) {
  return (
    <div>
      <div className={styles.div_root}>
        <img src={warning} />
        <div className={styles.div_text}>
          <p className={styles.title}>¡Ups! Lo sentimos</p>
          {/* Mensajes principales controlados por mostrarParrafos */}
          {mostrarParrafos ? (
            <p className={styles.text1}>
              No podemos continuar con la <b>cotización</b> en este momento
              debido a problemas técnicos.
            </p>
          ) : (
            <p className={styles.text1}>
              No podemos generar el documento de la <b>cotización</b> en este
              momento debido a problemas técnicos.
            </p>
          )}
          {/* Mensajes adicionales controlados por modoInformativo */}
          {modoInformativo ? (
            <p className={styles.text1}>
              Reporta la falla en la mesa de ayuda al correo{" "}
              <b>soporte.aplicativos@libertycolombia.com</b>.
            </p>
          ) : (
            <p className={styles.text1}>
              Por favor, intenta nuevamente a través del botón <b>Reintentar</b>
              . Si el error persiste, retoma la cotización en unos minutos desde{" "}
              <b>Mis Negocios.</b>
            </p>
          )}
        </div>
        <div>
          <p className={styles.text_num_quotation}>
            Número de cotización <span>100030819</span>
          </p>
          {/* Botones controlados por continuarCotizacion */}
          <div
            className={`${styles.div_btn} ${
              !continuarCotizacion ? styles.singleButton : ""
            }`}
          >
            {continuarCotizacion ? (
              <>
                <button
                  onClick={() => console.log("Ir a Mis Negocios")}
                  className={styles.button1}
                >
                  Mis Negocios
                </button>
                <button
                  onClick={() => console.log("Reintentar")}
                  className={styles.button}
                >
                  Reintentar
                </button>
              </>
            ) : (
              <button
                onClick={() => console.log("Ir a Mis Negocios")}
                className={styles.button1}
              >
                Ir a Mis Negocios
              </button>
            )}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <FooterPoput />
        </div>
      </div>
    </div>
  );
}
