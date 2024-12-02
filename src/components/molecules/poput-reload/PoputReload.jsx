import FooterPoput from "../../molecules/footer-pooput/FooterPoput";
import styles from "./styles.module.css";
import warning from "../../../assets/svg/Grupo5094.svg";

export default function PoputReload({
  buttons = [],
  num_cotizacion = true,
  stylesParrafo1 = null,
  btnReintentar = false,
  title = "¡Ups! Lo sentimos",
  parrafo1 = "", // Controla qué texto principal se muestra
  parrafo2 = "", // Controla el tipo de mensaje adicional
}) {
  return (
    <div>
      <div className={styles.div_root}>
        <img src={warning} />
        <div className={styles.div_text}>
          <p className={styles.title}>{title}</p>
          {/* Mensajes principales controlados por mostrarParrafos */}
          <p
            style={stylesParrafo1 ? stylesParrafo1 : { height: "45px" }}
            className={styles.text1}
          >
            {parrafo1}
          </p>
          <p className={styles.text1}>{parrafo2}</p>
        </div>
        <div>
          {num_cotizacion && (
            <p className={styles.text_num_quotation}>
              Número de cotización <span>100030819</span>
            </p>
          )}
          {/* Botones controlados por continuarCotizacion */}
          <div
            className={`${styles.div_btn} ${
              !btnReintentar ? styles.singleButton : ""
            }`}
          >
            {buttons.map((buton) => (
              <button
                onClick={() => buton.action()}
                className={styles[buton.style]}
              >
                {buton.text}
              </button>
            ))}
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
