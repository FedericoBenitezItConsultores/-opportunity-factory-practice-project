import React from "react";
import style from "./InfoPerson.module.css";
import InputForm from "./atoms/input-form/InputForm";

export const InfoPerson = () => {
  return (
    <div className={style.InfoPerson}>
      <h1 className={style.persona}>Persona</h1>
      <p className={style.information}>
        Ingresa la información de la persona, conocerla es importante para hacer
        una propuesta <br /> acorde a sus necesidades
      </p>
      <p className={style.parragraf}>Los campos con (*) son obligatorios</p>

      <div className={style.document}>
        <div className={style.grid}>
          <div className={style.document1}>
            <div>
              <table>
                <tr>
                  <td>
                    <div className={style.line} />
                  </td>
                  <td>
                    <img
                      className={style.Grupo7616}
                      src="Grupo7616.svg"
                      alt=""
                    />
                  </td>
                  <tr>
                    <td className={style.documents}>Tipo de documento</td>
                  </tr>
                  <tr>
                    <td>Cédula de Ciudadanía</td>
                  </tr>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <td>
                    <div className={style.line} />
                  </td>
                  <td>
                    <img
                      className={style.Grupo7616}
                      src="Grupo2046.svg"
                      alt=""
                    />
                  </td>
                  <tr>
                    <td className={style.documents}>Identificación</td>
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

      <InputForm />

      <p>Genero</p>
      <form>
        <div className={style.gender}>
          <label>
            <input type="radio" name="genero" value="masculino" />
            Masculino
          </label>
        </div>

        <div className={style.gender}>
          <label>
            <input type="radio" name="genero" value="femenino" />
            Femenino
          </label>
        </div>
      </form>
    </div>
  );
};
