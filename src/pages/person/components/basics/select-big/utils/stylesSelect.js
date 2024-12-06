export const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#e6e6e6",
    border: "1px solid #d9d9d9",
    borderRadius: "5px",
    fontSize: "14px",
    color: "#333333",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#333333",
    },
    width: "377px",
    height: "50px", // Mayor altura para el control
    position: "relative", // Necesario para posicionar el label
  }),
  valueContainer: (base) => ({
    ...base,
    marginBottom: "-20px",
    width: "80px",
    height: "50px",
    padding: "0 0 0 5px", // Ajusta el padding para que el texto no se oculte
    alignItems: "flex-start", // Alinea el texto arriba
    marginTop: "25px", // Añadir el margin-top aquí para bajar el texto
  }),
  placeholder: (base, state) => ({
    ...base,
    marginTop: "-10px",
    position: "relative",
    top: state.isFocused || state.hasValue ? "-15px" : "50%", // Flota hacia arriba si está enfocado o tiene valor
    fontSize: state.isFocused || state.hasValue ? "12px" : "14px",
    transform: state.isFocused || state.hasValue ? "translateY(15px)" : "translateY(5px)", // Para mantener el placeholder visible sin desaparecer
    transition: "all 0.4s ease", // Animación suave al flotar
    pointerEvents: "none", // Evita que interfiera con los clics
    color: "#707070", // Color placeholder
  }),
  menu: (base) => ({
    ...base,
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    width: "300px",
    maxWidth: "300px",
    maxHeight: "200px",
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


  