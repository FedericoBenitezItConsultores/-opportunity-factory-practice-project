import React from "react";
import style from "./InfoPerson.module.css";
import InputForm from "./atoms/InputForm";
import Select from "react-select";
import Navbar from "./organisms/navbar-2/Navbar";
import FooterButtons from "./molecules/Footer/FooterButtons";
import CardDiscount from "./molecules/card-discount/CardDiscount";
import citys from "./atoms/input/citys.js";
import { citisStyles, customStyles } from "./stylesSelect.js";
import { dayOptions, monthOptions, yearOptions } from "./dateInf.js";

export const InfoPerson = () => {
  const handleDayChange = (selectedDay) => {
    console.log("Día seleccionado:", selectedDay.value);
  };

  const handleMonthChange = (selectedMonth) => {
    console.log("Mes seleccionado:", selectedMonth.value);
  };

  const handleYearChange = (selectedYear) => {
    console.log("Año seleccionado:", selectedYear.value);
  };

  return (
    <>
      <Navbar />
      <div className={style.InfoPerson}>
        <h1 className={style.persona}>Persona</h1>
        <p className={style.information}>
          Ingresa la información de la persona, conocerla es importante para
          hacer una propuesta
        </p>
        <p className={style.information2}>acorde a sus necesidades</p>
        <p className={style.parragraf}>Los campos con (*) son obligatorios</p>

        <div className={style.containerCard}>
          {/* <div className={style.document1}> */}
          <div>
            <table>
              <tr>
                <td>
                  <div className={style.line} />
                </td>
                <td>
                  <img className={style.Image} src="Grupo7616.svg" alt="" />
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
                  <img className={style.Image} src="Grupo2046.svg" alt="" />
                </td>
                <tr>
                  <td className={style.documents}>Identificación</td>
                </tr>
                <tr>
                  <td className={style.numberCc}>123456789</td>
                </tr>
              </tr>
            </table>
          </div>
          {/* </div> */}
        </div>

        <div className={style.containerOne}>
          <InputForm />
          {/* <Input placehorder="primer nombre"/> */}
          <InputForm label="Primer apellido" />
        </div>

        <div className={style.containerTwo}>
          {/* Género */}
          <div className={style.container_gender}>
            <p className={style.gender_p}>Género</p>
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

          {/* Fecha de nacimiento */}
          <div className={style.info_date}>
            <p className={style.gender_birth}>Fecha de nacimiento</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <Select
                options={dayOptions}
                styles={customStyles}
                placeholder="Día"
                onChange={handleDayChange}
                isSearchable={false}
                menuPlacement="top"
              />

              <Select
                options={monthOptions}
                styles={customStyles}
                placeholder="Mes"
                onChange={handleMonthChange}
                isSearchable={false}
                menuPlacement="top"
              />

              <Select
                options={yearOptions}
                styles={customStyles}
                placeholder="Año"
                onChange={handleYearChange}
                isSearchable={false}
                menuPlacement="top"
              />
            </div>
          </div>
        </div>
        <div className={style.containerOne}>
          <InputForm type="number" label="Años de experiencia" />
          <Select
            className={style.inputCity}
            options={citys}
            styles={citisStyles}
            placeholder="Ciudades de movilizacion"
            onChange={handleYearChange}
            isSearchable={false}
            menuPlacement="top"
          />
        </div>
      </div>
      <CardDiscount />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4em",
          marginBottom: "7em",
        }}
      >
        <FooterButtons />
      </div>
    </>
  );
};
