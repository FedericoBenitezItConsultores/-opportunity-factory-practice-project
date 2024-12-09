import styles from "./styles.module.css";
import warning from "../../../../assets/icons/svg/Grupo18914.svg";
import back from "../../../../assets/icons/svg/Grupo133.svg";
import Button from "../../../basic/button/Button";
export default function SessionEnded({ popup, handleContinuar }) {
  return (
    <>
      {popup && (
        <div className={styles.div_root}>
          <img
            onClick={handleContinuar}
            style={{ cursor: "pointer", zIndex: "23456786" }}
            className={styles.back}
            src={back}
          />
          <div className={styles.div_roo2}>
            <img
              src={warning}
              style={{ width: "100px" }}
              alt="Imagen de espera"
            />
            <p className={styles.session_finish}>Tu sesión ha finalizado.</p>
          </div>
          <div style={{ height: "176px" }} className={styles.buttons}>
            <Button
              style={{
                width: "160px",
                height: "44px",
              }}
              typeStyle="secondary"
              onClick={handleContinuar}
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
