import FooterPoput from "../../molecules/footer-pooput/FooterPoput";
import styles from "./styles.module.css";
//  className={styles.div_root}
export default function PoputReload({
  continarCotizacion: continuarCotizacion = true,
}) {
  return (
    <div className={styles.div_root}>
      <p className={styles.title}>¡Ups! Lo sentimos</p>
      <p className={styles.text1}>
        {continuarCotizacion
          ? "No podemos continuar con la cotización en este momento debido a problemas técnicos."
          : "No podemos generar el documento de la cotización en este momento debido a problemas técnicos."}
      </p>
      <p className={styles.text1}>
        Por favor, intenta nuevamente a través del botón Reintentar. Si el error
        persiste, retoma la cotización en unos minutos desde Mis Negocios.
      </p>
      <button
        onClick={() => console.log("continuar")}
        className={styles.button}
      >
        Continuar
      </button>
      <button
        onClick={() => console.log("continuar")}
        className={styles.button}
      >
        Continuar
      </button>
      <FooterPoput />
    </div>
  );
}
