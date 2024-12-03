import React, { useEffect, useState } from "react";
import style from "./InfoPerson.module.css";
import InputForm from "../atoms/InputForm.jsx";
import Select from "react-select";
import Navbar from "../organisms/navbar-2/Navbar.jsx";
import FooterButtons from "../molecules/Footer/FooterButtons.jsx";
import CardDiscount from "../molecules/card-discount/CardDiscount.jsx";
import citys from "../atoms/input/citys.js";
import PoputReloadContainer from "../../components/molecules/pooput-spinner/pooput-spinner.jsx";

import {
  citisStyles,
  citisStylesError,
  customStyles,
  customStylesError,
} from "./stylesSelect.js";
import { dayOptions, monthOptions, yearOptions } from "./dateInf.js";
import { validateForm } from "./validatedForm.js";
import { AdditionalDiscount } from "../molecules/additional-discount/AdditionalDiscount.jsx";
import { useNavigate } from "react-router-dom";
import Poput from "../organisms/poput/Poput.jsx";
import PoputReload from "../molecules/poput-reload/PoputReload.jsx";

export const InfoPerson = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    primerNombre: "",
    primerApellido: "",
    genero: "",
    dia: "",
    mes: "",
    año: "",
    añosExperiencia: "",
    ciuadadesMovilizacion: "",
  });
  const [formData, setFormData] = useState({
    primerNombre: "",
    primerApellido: "",
    genero: "",
    date: {},
    añosExperiencia: "",
    ciuadadesMovilizacion: "",
  });
  const navigate = useNavigate();
  const handleDayChange = (selectedDay) => {
    setFormData((prev) => ({
      ...prev,
      date: { ...prev.date, dia: selectedDay.value },
    }));
    setError((prev) => ({ ...prev, dia: "" }));
  };
  const handleMonthChange = (selectedMonth) => {
    setFormData((prev) => ({
      ...prev,
      date: { ...prev.date, mes: selectedMonth.value },
    }));
    setError((prev) => ({ ...prev, mes: "" }));
  };
  const handleYearChange = (selectedYear) => {
    setFormData((prev) => ({
      ...prev,
      date: { ...prev.date, año: selectedYear.value },
    }));
    setError((prev) => ({ ...prev, año: "" }));
  };
  const handleCitys = (selectedcity) => {
    setFormData((prev) => ({
      ...prev,
      ciuadadesMovilizacion: selectedcity.value,
    }));
    setError((prev) => ({ ...prev, ciuadadesMovilizacion: "" }));
  };
  const handleSubmit = () => {
    const returnError = validateForm(formData);
    if (returnError.length > 0) {
      returnError.forEach((item) =>
        setError((prev) => ({ ...prev, [item]: "campo obligatorio" }))
      );
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/price");
    }, 2000);
  };
  const handleVolver = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 2000);
  };
  const handleOtroBoton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setError((prev) => ({ ...prev, [name]: "" }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [ErrorCotizacion, setErrorCotizacion] = useState(false);
  const [ErrorCotizacionIrAMisNegocios, setErrorCotizacionIrAMisNegocios] =
    useState(false);
  useEffect(() => {
    setTimeout(() => {
      setErrorCotizacion(true);
    }, 5000);
  }, []);

  return (
    <>
      <Navbar />
      {ErrorCotizacion && (
        <>
          <Poput>
            <>
              <PoputReload
                buttons={[
                  {
                    action: () => navigate("/inf-person"),
                    text: "Mis Negocios",
                    style: "button1",
                  },
                  {
                    action: () => {
                      setErrorCotizacion(false);
                      setErrorCotizacionIrAMisNegocios(true);
                    },
                    text: "Reintentar",
                    style: "button",
                  },
                ]}
                parrafo1={
                  <>
                    No podemos continuar con la <b>cotización</b> en este
                    momento debido a problemas técnicos.
                  </>
                }
                parrafo2={
                  <>
                    Por favor, intenta nuevamente a través del botón{" "}
                    <b>Reintentar</b>
                    .
                    <br />
                    Si el error persiste, retoma la cotización en unos minutos
                    desde <br />
                    <b> Mis Negocios.</b>
                  </>
                }
              />
            </>
          </Poput>
        </>
      )}
      {ErrorCotizacionIrAMisNegocios && (
        <>
          <Poput>
            <>
              <PoputReload
                buttons={[
                  {
                    action: () => setErrorCotizacionIrAMisNegocios(false),
                    text: "Ir a Mis Negocios",
                    style: "button1",
                  },
                ]}
                parrafo1={
                  <>
                    No podemos continuar con la <b>cotización</b> en este
                    momento debido a problemas técnicos.
                  </>
                }
                parrafo2={
                  <>
                    Reporta la falla en la mesa de ayuda al correo <br />
                    <b>soporte.aplicativos@libertycolombia.com</b>
                  </>
                }
              />
            </>
          </Poput>
        </>
      )}
      <div className={style.InfoPerson}>
        <h1 className={style.persona}>Persona</h1>
        <p className={style.information}>
          Ingresa la información de la persona, conocerla es importante para
          hacer una propuesta
        </p>
        <p className={style.information2}>acorde a sus necesidades</p>
        <p className={style.parragraf}>Los campos con (*) son obligatorios</p>

        <div className={style.containerCard}>
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
        </div>

        <div className={style.containerOne}>
          <div style={{ position: "relative" }}>
            {/* primerNombre */}
            {error && <p className={style.error_form}>{error.primerNombre}</p>}
            <InputForm
              name="primerNombre"
              action={handleInput}
              style={
                error.primerNombre
                  ? { border: "#E92243 solid 2px", backgroundColor: "#FAF1F1 " }
                  : {}
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            {error && (
              <p className={style.error_form}>{error.primerApellido}</p>
            )}
            {/* primerApellido */}
            {/* <Input placehorder="primer nombre"/> */}
            <InputForm
              name="primerApellido"
              action={handleInput}
              label="Primer apellido"
              style={
                error.primerApellido
                  ? { border: "#E92243 solid 2px", backgroundColor: "#FAF1F1 " }
                  : {}
              }
            />
          </div>
        </div>

        <div className={style.containerTwo}>
          {/* Género */}
          <div className={style.container_gender}>
            <p className={style.gender_p}>Género</p>
            <form>
              <div
                style={
                  error.genero
                    ? {
                        border: "#E92243 solid 2px",
                        backgroundColor: "#FAF1F1 ",
                      }
                    : {}
                }
                className={style.gender}
              >
                <label style={{ position: "relative" }}>
                  {/* genero */}
                  <input
                    type="radio"
                    name="genero"
                    value={formData.genero === "masculino"}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, genero: "masculino" }));
                      setError((prev) => ({ ...prev, genero: "" }));
                    }}
                    style={{ width: "60px", height: "15px" }}
                  />
                  Masculino
                </label>
              </div>
              <div
                style={
                  error.genero
                    ? {
                        border: "#E92243 solid 2px",
                        backgroundColor: "#FAF1F1 ",
                      }
                    : {}
                }
                className={style.gender}
              >
                <label style={{ position: "relative" }}>
                  {/* genero */}
                  <input
                    type="radio"
                    name="genero"
                    value={formData.genero === "femenino"}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, genero: "femenino" }));
                      setError((prev) => ({ ...prev, genero: "" }));
                    }}
                    style={{ width: "60px", height: "15px" }}
                  />
                  Femenino
                </label>
              </div>
            </form>
          </div>

          {/* Fecha de nacimiento */}
          <div className={style.info_date}>
            <p className={style.gender_birth}>Fecha de nacimiento</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ position: "relative" }}>
                {/* {error && <p className={style.error_form}>{error.dia}</p>} */}
                {/* dia */}
                <Select
                  options={dayOptions}
                  styles={!error.dia ? customStyles : customStylesError}
                  placeholder="Día"
                  onChange={handleDayChange}
                  isSearchable={false}
                  menuPlacement="top"
                />
              </div>
              <div style={{ position: "relative" }}>
                {/* {error && <p className={style.error_form}>{error.mes}</p>} */}
                {/* mes */}
                <Select
                  options={monthOptions}
                  styles={!error.mes ? customStyles : customStylesError}
                  placeholder="Mes"
                  onChange={handleMonthChange}
                  isSearchable={false}
                  menuPlacement="top"
                />
              </div>
              <div style={{ position: "relative" }}>
                {/* {error && <p className={style.error_form}>{error.año}</p>} */}
                {/* año */}
                <Select
                  options={yearOptions}
                  styles={!error.año ? customStyles : customStylesError}
                  placeholder="Año"
                  onChange={handleYearChange}
                  isSearchable={false}
                  menuPlacement="top"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={style.containerOne}>
          <div style={{ position: "relative" }}>
            {error && (
              <p className={style.error_form}>{error.añosExperiencia}</p>
            )}
            {/* añosExperiencia */}
            <InputForm
              action={handleInput}
              name="añosExperiencia"
              type="number"
              label="Años de experiencia"
              style={
                error.añosExperiencia
                  ? { border: "#E92243 solid 2px", backgroundColor: "#FAF1F1 " }
                  : {}
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            {error && (
              <p className={style.error_form}>{error.ciuadadesMovilizacion}</p>
            )}
            {/* ciuadadesMovilizacion */}
            <Select
              className={style.inputCity}
              options={citys}
              styles={
                !error.ciuadadesMovilizacion ? citisStyles : citisStylesError
              }
              placeholder="Ciudades de movilizacion"
              onChange={handleCitys}
              isSearchable={true} // Permitir búsqueda y escritura
              menuPlacement="top"
              menuPortalTarget={document.body} // Esto dibuja el menú en el body
            />
          </div>
        </div>
      </div>
      <CardDiscount />
      <AdditionalDiscount />
      {loading && <PoputReloadContainer />}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4em",
          marginBottom: "7em",
        }}
      >
        <FooterButtons
          type={3}
          functionVolver={handleVolver}
          functionContinuar={handleSubmit}
          functionOtroBoton={handleOtroBoton}
        />
      </div>
    </>
  );
};
