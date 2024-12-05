export const customStyles = {
    control: (base) => ({
      ...base,
      background: "#e6e6e6",
      border: "1px solid #d9d9d9",
      borderRadius: "5px",
      border: "1px solid #919191",
      padding: "5px",
      fontSize: "14px",
      color: "#e6e6e6",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#333333", 
      },
      width: "300px",
      height: "50px",
    }),
    
    menu: (base) => ({
    ...base,
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    width: "300px", // Ajustar ancho del menú 
    maxWidth: "300px", // Asegurarse de que el menú no exceda este ancho
    maxHeight: "200px", // altura  menú desplegable
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
      color: "#333333", 
    }),
    placeholder: (base) => ({
      ...base,
      color: "#b3b3b3",
      fontFamily: "roboto regular, sans- serif", // Aquí puedes cambiar el tipo de letra
    }),
  };

export const customStylesError = {
    control: (base) => ({
      ...base,
      background: "#FAF1F1 ",
      border: "1px solid #E92243",
      borderRadius: "8px",
      padding: "5px",
      fontSize: "14px",
      color: "#000",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#ff0000",
      },
      width: "116px",
      height: "50px",
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
      color: "#666666",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#000",
    }),
  };
  
export const citisStylesError = {
    control: (base) => ({
      ...base,
      background: "#FAF1F1 ",
      border: "1px solid #E92243",
      borderRadius: "8px",
      padding: "5px",
      fontSize: "14px",
      color: "#000",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#ff0000",
      },
      width: "375px",
      height: "63px",
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
      color: "#000",
    }),
  };

export const citisStyles = {
    control: (base) => ({
      ...base,
      background: "#ff0000",
      border: "1px solid #ff0000",
      borderRadius: "8px",
      padding: "5px",
      fontSize: "14px",
      color: "#ff0000",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#ff0000", // Cambiado a gris
      },
      width: "375px",
      height: "63px",
    }),
  
    placeholder: (base) => ({
      ...base,
      color: "#ff0000",
      textAlign: "left", // Alinear el texto a la izquierda
      marginLeft: "-10px", // Ajustar el espacio desde el borde izquierdo
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
      color: "#ff0000", // Cambiado a gris
    }),
  };

// citys.js
const citys = [
  { value: "BOGOTÁ", label: "BOGOTÁ D.C." },
  { value: "MEDELLÍN", label: "MEDELLÍN" },
  { value: "CALI", label: "CALI" },
  { value: "BARRANQUILLA", label: "BARRANQUILLA" },
  { value: "CARTAGENA", label: "CARTAGENA" },
  { value: "CUCUTA", label: "CUCUTA" },
  { value: "BUCARAMANGA", label: "BUCARAMANGA" },
  { value: "VILLAVICENCIO", label: "VILLAVICENCIO" },
  { value: "IBAGUÉ", label: "IBAGUÉ" },
  { value: "SANTA", label: "SANTA MARTA" },
  { value: "PEREIRA", label: "PEREIRA" },
  { value: "MANIZALES", label: "MANIZALES" },
  { value: "MONTERÍA", label: "MONTERÍA" },
  { value: "NEIVA", label: "NEIVA" },
  { value: "PASTO", label: "PASTO" },
  { value: "ARMENIA", label: "ARMENIA" },
  { value: "POPAYÁN", label: "POPAYÁN" },
  { value: "VALLEDUPAR", label: "VALLEDUPAR" },
  { value: "SINCELEJO", label: "SINCELEJO" },
  { value: "RIOHACHA", label: "RIOHACHA" },
  { value: "TUNJA", label: "TUNJA" },
  { value: "YOPAL", label: "YOPAL" },
  { value: "QUIBDÓ", label: "QUIBDÓ" },
  { value: "FLORENCIA", label: "FLORENCIA" },
  { value: "LETICIA", label: "LETICIA" },
  { value: "MITÚ", label: "MITÚ" },
  { value: "SAN", label: "SAN ANDRÉS" },
  { value: "PUERTO", label: "PUERTO CARREÑO" },
  { value: "MOCOA", label: "MOCOA" },
];

export default citys;
  