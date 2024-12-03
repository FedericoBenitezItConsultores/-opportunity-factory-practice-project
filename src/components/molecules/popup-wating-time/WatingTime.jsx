import React, { useEffect, useState } from "react";
import PoputWatingTime from "./PoputWatingTime";
import Poput from "../../organisms/poput/Poput";

export default function WatingTime() {
  const [popup, setPopup] = useState(false);

  const [tiempoRestante, setTiempoRestante] = useState(120);
  const tiempoInactividad = 1 * 1000 * 60;
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
    setPopup(false);
  };

  const handleContinuar = () => {
    setPopup(false);
    setTiempoRestante(120);
  };

  if (popup)
    return (
      <>
        <Poput>
          <PoputWatingTime
            popup={popup}
            setPopup={setPopup}
            handleCerrarSesion={handleCerrarSesion}
            handleContinuar={handleContinuar}
            formatTiempo={formatTiempo}
            tiempoRestante={tiempoRestante}
          />
        </Poput>
      </>
    );
}
