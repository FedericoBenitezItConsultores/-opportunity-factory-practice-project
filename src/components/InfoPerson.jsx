import React from "react";
import style from "./InfoPerson.module.css";

export const InfoPerson = () => {
  return (
    <div className={style.InfoPerson}>
      <h1>persona</h1>
      <p>
        Ingresa la informacion de la persona, conocerla es inportante para hacer
        una propuesta acorde a sus necesidades
      </p>
      <p>los campos con (*) son obligatorios</p>
      
        <div className={style.document}>
          <div className={style.grid}>
            <div className={style.document1}>
              <img className={style.Grupo7616} src="Grupo7616.svg" alt="" />
              {/* <p>
                <d>Tipo de documento</d>
              </p>
              <p>Cedula de Ciudadania</p> */}
            </div>

            {/* <div className={style.document2}>
              <img src="Grupo2046.svg" alt="" />
              <p>
                <d>Identificación</d>
              </p>
              <p>123456789</p>
            </div> */}
          </div>
        </div>

        <div>
          {/* <label htmlFor="nombre">Primer nombre</label> */}
          {/* <p>Primer nombre</p> */}
          <input type="text" id="nombre" placeholder="Primer nombre" />
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
    
  );
};
