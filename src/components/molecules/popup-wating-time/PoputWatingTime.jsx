import styles from "./styles.module.css";
import imgWatingTime from "../../../assets/svg/Group8.svg";
import warning from "../../../assets/svg/Grupo18914.svg";
import back from "../../../assets/svg/Grupo133.svg";
export default function PoputWatingTime({
  popup,
  formatTiempo,
  handleCerrarSesion,
  handleContinuar,
  tiempoRestante,
}) {
  return (
    <>
      {popup && (
        <>
          {tiempoRestante > 0 ? (
            <div className={styles.div_root}>
              <img
                onClick={handleContinuar}
                style={{ cursor: "pointer", zIndex: "23456786" }}
                className={styles.back}
                src={back}
              />
              <div className={styles.div_roo2}>
                <img src={imgWatingTime} alt="Imagen de espera" />
                <p>¿Estás ahí? Tu sesión finalizará en:</p>
                <div className={styles.div_count_father}>
                  <div className={styles.div_count}>
                    <p className="center">{formatTiempo().minutos}</p>
                  </div>
                  <p className={styles.dos_puntos}>{":"}</p>
                  <div className={styles.div_count}>
                    <p className="center">{formatTiempo().segundos}</p>
                  </div>
                </div>
                <div>
                  <p>
                    Si deseas continuar en sesión, presiona el botón "Continuar"
                  </p>
                </div>
              </div>
              <div style={{ height: "116px" }} className={styles.buttons}>
                <button
                  onClick={handleCerrarSesion}
                  className={styles.button_cerrar_sesion}
                >
                  Cerrar sesión
                </button>
                <button onClick={handleContinuar} className={styles.button}>
                  Continuar
                </button>
              </div>
            </div>
          ) : (
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
                <p className={styles.session_finish}>
                  Tu sesión ha finalizado.
                </p>
              </div>
              <div style={{ height: "176px" }} className={styles.buttons}>
                <button className={styles.button_iniciar_sesion}>
                  Iniciar sesión
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
