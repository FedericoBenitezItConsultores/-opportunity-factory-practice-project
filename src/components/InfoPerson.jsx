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
      <p className={style.parragraf}>los campos con (*) son obligatorios</p>

      <div className={style.document}>
        <div className={style.grid}>
          <div className={style.document1}>
            <div>
            <table>
              <tr>
                <td>
                  <img className={style.Grupo7616} src="Grupo7616.svg" alt="" />
                </td>
                <tr>
                  <td>Tipo de documento</td>
                </tr>
                <tr>
                  <td>Tipo de documento</td>
                </tr>
              </tr>
            </table>
            </div>
            <div>
            <table>
              <tr>
                <td>
                  <img className={style.Grupo7616} src="Grupo7616.svg" alt="" />
                </td>
                <tr>
                  <td>Identificación</td>
                </tr>
                <tr>
                  <td>123456789</td>
                </tr>
              </tr>
            </table>
            </div>
          </div>
        </div>
      </div>

      <div>
        <input type="text" id="nombre" placeholder="Primer nombre" />
      </div>

      <p>Genero *</p>
      <form>
      <div className={style.gender}>
        <label>
          <input className={style.input_gender}type="radio" name="genero" value="masculino" />
          Masculinoo
        </label>
      </div>
     <div className={style.gender}>
        <label>
          <input className={style.input_gender} type="radio" name="genero" value="femenino" />
          Femenino
        </label>
     </div>
      </form>
    </div>
  );
};
