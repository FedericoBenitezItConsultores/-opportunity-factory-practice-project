import React from "react";

export const InfoPersona = () => {
  return (
    <>
      <h1>persona</h1>
      <p>
        Ingresa la informacion de la persona, conocerla es inportante para hacer
        una propuesta acorde a sus necesidades
      </p>
      <a href="http://">los campos con (*) son obligatorios</a>
      <div>
        <div>
          <img src="Grupo7616.svg" alt="" />
          <p>
            <d>Tipo de documento</d>
          </p>
          <p>Cedula de Ciudadania</p>
          <img src="Grupo2046.svg" alt="" />
          <p>
            <d>Identificación</d>
          </p>
          <p>123456789</p>
        </div>

        <div>
        <label htmlFor="nombre">Primer nombre</label>
        {/* <p>Primer nombre</p> */}
        <input type="text" id="nombre" placeholder="Primer nombre"/>

        </div>

        <p>Genero</p>
        <form>
          <label>
            <input type="radio" name="genero" value="masculino" />
            Masculino
          </label>

          <label>
            <input type="radio" name="genero" value="femenino" />
            Femenino
          </label>

        </form>


      </div>
    </>
  );
};
