import React from "react";
import PoputReload from "./PoputReload";

export default function PoputReloadContainer() {
  const continuarCotizacion = true;
  const mostrarParrafos = false;

  return (
    <PoputReload
      continuarCotizacion={continuarCotizacion}
      mostrarParrafos={mostrarParrafos}
    />
  );
}
