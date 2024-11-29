import React from "react";
import style from "./InfoPerson.module.css";
import InputForm from "./atoms/InputForm";
import Select from "react-select";

// Opciones para los selectores de fecha
const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
  label: i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
}));

const monthOptions = [
  { value: "01", label: "Enero" },
  { value: "02", label: "Febrero" },
  { value: "03", label: "Marzo" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Mayo" },
  { value: "06", label: "Junio" },
  { value: "07", label: "Julio" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Septiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" },
];

const yearOptions = Array.from({ length: 100 }, (_, i) => ({
  value: `${new Date().getFullYear() - i}`,
  label: `${new Date().getFullYear() - i}`,
}));

// Estilos personalizados para React Select
const customStyles = {
  control: (base) => ({
    ...base,
    background: "#f7f7f7",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "4px",
    fontSize: "14px",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#0066ff",
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "8px",
    overflow: "hidden",
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    background: state.isFocused ? "#e6f7ff" : "white",
    color: state.isFocused ? "#0066ff" : "#333",
    textAlign: "left",
    padding: "10px",
    cursor: "pointer",
  }),
};

export const InfoPerson = () => {
  // Manejo de cambios
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
    <div className={style.InfoPerson}>
      <h1 className={style.persona}>Persona</h1>
      <p className={style.information}>
        Ingresa la información de la persona, conocerla es importante para hacer
        una propuesta <br /> acorde a sus necesidades
      </p>
      <p className={style.parragraf}>Los campos con (*) son obligatorios</p>

      <div className={style.containerCard}>
        <div className={style.document1}>
          {/* Tipo de documento e identificación */}
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
                  <td>123456789</td>
                </tr>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className={style.containerOne}>
        <InputForm />
        <InputForm label="primer apellido" />
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
            {/* Selector de Día */}
            <Select
              options={dayOptions}
              styles={customStyles}
              placeholder="Día"
              onChange={handleDayChange}
              isSearchable={false}
            />

            {/* Selector de Mes */}
            <Select
              options={monthOptions}
              styles={customStyles}
              placeholder="Mes"
              onChange={handleMonthChange}
              isSearchable={false}
            />

            {/* Selector de Año */}
            <Select
              options={yearOptions}
              styles={customStyles}
              placeholder="Año"
              onChange={handleYearChange}
              isSearchable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
