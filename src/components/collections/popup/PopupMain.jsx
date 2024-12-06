import Popup from "../../basic/popup/Popup";
import styles from "./Popup.module.css";
import IconDanger from "../../../assets/icons/svg/Icon-danger.svg";
import FooterPopup from "../../basic/popup/footer-popup/FooterPopup";
import Button from "../../basic/button/Button";

const PopupMain = ({
  img = IconDanger,
  title = <span style={{ color: "#1A1446" }}>¡Ups! Lo sentimos</span>,
  buttons = [
    {
      typeStyle: "primary",
      text: "Mis negocios",
      action: console.log("hello soy "),
    },
    {
      typeStyle: "secondary",
      text: "Reintentar",
      action: console.log("hello soy "),
    },
  ],
  text1 = (
    <>
      No podemos continuar con la <b>cotización</b> en este momento debido a
      problemas técnicos.
    </>
  ),
  text2 = (
    <>
      Por favor, intenta nuevamente a través del botón <b>Reintentar.</b> <br />
      Si el error persiste, retoma la cotización en unos minutos desde <br />
      <b>Mis Negocios.</b>
    </>
  ),
  numQuotation = true,
}) => {
  return (
    <Popup>
      <div>
        <div className={styles.modalHeader}>
          <img className={styles.IconDanger} src={img} alt="Alerta" />
          <h2 className={styles.modalTitle}>{title}</h2>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.container_text}>
            <p className={styles.modalText}>{text1}</p>
            <p className={styles.modalText}>{text2}</p>
          </div>
          {numQuotation && (
            <p
              style={{ margin: " 30px 0 30px 13% " }}
              className={styles.modalText}
            >
              Número de cotización
              <span className={styles.quoteNumber}> 100030819</span>
            </p>
          )}
        </div>

        <div className={styles.container_btns}>
          {buttons.map((buton, i) => (
            <Button
              key={i}
              onClick={() => buton.action()}
              typeStyle={buton.typeStyle}
            >
              {buton.text}
            </Button>
          ))}
        </div>
        <FooterPopup />
      </div>
    </Popup>
  );
};

export default PopupMain;
