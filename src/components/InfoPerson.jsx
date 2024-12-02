import React, { useState } from "react";
import style from "./InfoPerson.module.css";
import InputForm from "./atoms/InputForm";
import Select from "react-select";
import Navbar from "./organisms/navbar-2/Navbar";
// import { Footer } from "./molecules/Footer/Footer";
import FooterButtons from "./molecules/footer/FooterButtons";
import CardDiscount from "./card-discount/CardDiscount";

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

// stilos
const customStyles = {
  control: (base) => ({
    ...base,
    background: "#ffffff",
    border: "1px solid #d9d9d9",
    borderRadius: "8px",
    padding: "5px",
    fontSize: "14px",
    color: "#333333",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#0073e6",
    },
  }),
  menu: (base) => ({
    ...base,
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f8ff" : "#ffffff",
    color: state.isFocused ? "#0073e6" : "#333333",
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#0073e6",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#b3b3b3",
  }),
};

export const InfoPerson = () => {
  const [data, setData] = useState({
    primerNombre: "",
    primerApellido: "",
    genero: "",
  });

  const [errors, setErrors] = useState({});

  const handleDayChange = (selectedDay) => {
    console.log("Día seleccionado:", selectedDay.value);
    setData((prev) => ({
      ...prev,
      date: { ...prev.date, day: selectedDay.value },
    }));
  };

  const handleMonthChange = (selectedMonth) => {
    console.log("Mes seleccionado:", selectedMonth.value);
    setData((prev) => ({
      ...prev,
      date: { ...prev.date, month: selectedMonth.value },
    }));
  };

  const handleYearChange = (selectedYear) => {
    console.log("Año seleccionado:", selectedYear.value);
    setData((prev) => ({
      ...prev,
      date: { ...prev.date, year: selectedYear.value },
    }));
  };

  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) =>{
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: value.trim() === "" ? "Este campo es obligatorio" : "",
  }));
  }
  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(data).forEach((key) => {
      if (!data[key]) {
        newErrors[key] = "Este campo es obligatorio";
      }
    });

    if (Object.keys(newErrors).length === 0) {
      alert("Formulario enviado correctamente");
    } else {
      setErrors(newErrors);
    }
  };

  console.log(data);
  return (
    <>
      <Navbar />
      <div className={style.InfoPerson}>
        <h1 className={style.persona}>Persona</h1>
        <p className={style.information}>
          Ingresa la información de la persona, conocerla es importante para
          hacer una propuesta <br /> acorde a sus necesidades
        </p>
        <p className={style.parragraf}>Los campos con (*) son obligatorios</p>

        <div className={style.containerCard}>
          <div className={style.document1}>
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
          <InputForm action={handleInput} name={"primerNombre"} />
          <InputForm
            action={handleInput}
            name={"primerApellido"}
            label="primer apellido"
          />
        </div>

        <div className={style.containerTwo}>
          {/* Género */}
          <div className={style.container_gender}>
            <p className={style.gender_p}>Género *</p>
            <form>
              <div className={style.gender}>
                <label>
                  <input
                    type="radio"
                    checked={data?.genero === "masculino"}
                    onChange={() =>
                      setData((prev) => ({ ...prev, genero: "masculino" }))
                    }
                    name="genero"
                    value="masculino"
                  />
                  Masculino
                </label>
              </div>
              <div className={style.gender}>
                <label>
                  <input
                    type="radio"
                    checked={data?.genero === "femenino"}
                    onChange={() =>
                      setData((prev) => ({ ...prev, genero: "femenino" }))
                    }
                    name="genero "
                    value="femenino"
                  />
                  Femenino
                </label>
              </div>
            </form>
          </div>

          {/* Fecha de nacimiento */}
          <div className={style.info_date}>
            <p className={style.gender_birth}>Fecha de nacimiento *</p>
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
          <InputForm action={handleInput} name={'añosExperiencia'} label="Años de experiencia "
             style ={{borderColor: errors.añosExperiencia ? "red" : "green",}}
             />
             {errors.añosExperiencia && (
               <p style={{ color: "red"}}>{errors.añosExperiencia}</p>
             )}

          <InputForm action={handleInput} name={'ciudadMovilizacion'} label="Ciudad de movilizacion "
          style ={{borderColor: errors.ciudadMovilizacion ? "red" : "green",}}
          />
          {errors.ciudadMovilizacion && (
            <p style={{ color: "red"}}>{errors.ciudadMovilizacion}</p>
          )}
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
