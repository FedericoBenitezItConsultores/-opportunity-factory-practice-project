import styles from "./styles.module.css";
import warning from "../../../assets/svg/Grupo5094.svg";
//  className={styles.div_root}
export default function PoputReload({
  continarCotizacion: continuarCotizacion = true,
}) {
  return (
    <div className={styles.div_root}>
      <img src={warning} />
      <p className={styles.title}>¡Ups! Lo sentimos</p>
      <div>
        <p className={styles.text1}>
          {continuarCotizacion ? (
            <>
              No podemos continuar con la <b>cotización</b> en este momento
              debido a problemas técnicos.
            </>
          ) : (
            <>
              No podemos generar el documento de la <b>cotización</b> en este
              momento debido a problemas técnicos.
            </>
          )}
        </p>
        <p className={styles.text1}>
          Por favor, intenta nuevamente a través del botón <b>Reintentar</b>. Si
          el error persiste, retoma la cotización en unos minutos desde{" "}
          <b>Mis Negocios.</b>
        </p>
      </div>
      <p className={styles.text_num_quotation}>
        Número de cotización <span>100030819</span>
      </p>
      <div>
        <button
          onClick={() => console.log("continuar")}
          className={styles.button1}
        >
          Mis Negocios
        </button>
        <button
          onClick={() => console.log("continuar")}
          className={styles.button}
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}
