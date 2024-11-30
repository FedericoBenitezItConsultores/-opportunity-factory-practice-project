import FooterPoput from "../../molecules/footer-pooput/FooterPoput";
import styles from "./styles.module.css";
import warning from "../../../assets/svg/Grupo5094.svg";
//  className={styles.div_root}
export default function PoputReload({
  continuarCotizacion = true,
  btnReintentar,
}) {
  return (
    <div>
      <div className={styles.div_root}>
        <img src={warning} />
        <div className={styles.div_text}>
          <p className={styles.title}>¡Ups! Lo sentimos</p>
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
            Por favor, intenta nuevamente a través del botón <b>Reintentar</b>.
            Si el error persiste, retoma la cotización en unos minutos desde{" "}
            <b>Mis Negocios.</b>
          </p>
        </div>
        <div>
          <p className={styles.text_num_quotation}>
            Número de cotización <span>100030819</span>
          </p>
          <div className={styles.div_btn}>
            <button
              onClick={() => console.log("continuar")}
              className={styles.button1}
            >
              Mis Negocios
            </button>
            {btnReintentar && (
              <button
                onClick={() => console.log("continuar")}
                className={styles.button}
              >
                Reintentar
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
