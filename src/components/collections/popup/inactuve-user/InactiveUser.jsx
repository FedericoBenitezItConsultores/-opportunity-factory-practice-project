import React, { useEffect, useState } from "react";
import SessionEndedr from "./SessionEnded";
import Poput from "../../../basic/popup/Popup";
import imgWatingTime from "../../../../assets/icons/svg/temporizador.svg";
import back from "../../../../assets/icons/svg/Grupo133.svg";

import styles from "./styles.module.css";
import Button from "../../../basic/button/Button";
export default function InactiveUser() {
  const [popup, setPopup] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(120);
  const tiempoInactividad = 0.25 * 1000 * 60;

  useEffect(() => {
    let timeoutId;
    const resetTimer = () => {
      if (!popup) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setPopup(true), tiempoInactividad);
      }
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    timeoutId = setTimeout(() => setPopup(true), tiempoInactividad);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, [popup]);

  useEffect(() => {
    let interval = null;

    if (popup) {
      interval = setInterval(() => {
        setTiempoRestante((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [popup]);

  const formatTiempo = () => {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    return {
      minutos,
      segundos: segundos < 10 ? `0${segundos}` : segundos,
    };
  };

  const handleCerrarSesion = () => {
    setTiempoRestante(-1);
  };

  const handleContinuar = () => {
    setPopup(false);
    setTiempoRestante(120);
  };

  if (popup)
    return (
      <>
        <Poput tyle={false}>
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
                <p style={{ fontSize: "32px", fontFamily: "roboto Medium" }}>
                  ¿Estás ahí? Tu sesión finalizará en:
                </p>
                <div className={styles.div_count_father}>
                  <div className={styles.timeBox}>
                    <p className="center">0{formatTiempo().minutos}</p>
                  </div>
                  <p className={styles.dos_puntos}>{":"}</p>
                  <div className={styles.timeBox}>
                    <p className="center">{formatTiempo().segundos}</p>
                  </div>
                </div>
                <div>
                  <p className={styles.parrafo}>
                    Si deseas continuar en sesión,<br></br> presiona el botón
                    "Continuar"
                  </p>
                </div>
              </div>
              <div style={{ height: "116px" }} className={styles.buttons}>
                <Button
                  style={{
                    width: "160px",
                    height: "44px",
                    padding: "13px 22px 11px 22px",
                  }}
                  typeStyle="primary"
                  onClick={handleCerrarSesion}
                >
                  Cerrar sesión
                </Button>
                <Button
                  style={{
                    width: "160px",
                    height: "44px",
                    padding: "13px 32px 11px 32px",
                  }}
                  typeStyle="secondary"
                  onClick={handleContinuar}
                >
                  Continuar
                </Button>
              </div>
            </div>
          ) : (
            <SessionEndedr
              popup={popup}
              setPopup={setPopup}
              handleCerrarSesion={handleCerrarSesion}
              handleContinuar={handleContinuar}
              formatTiempo={formatTiempo}
              tiempoRestante={tiempoRestante}
            />
          )}
        </Poput>
      </>
    );
}
