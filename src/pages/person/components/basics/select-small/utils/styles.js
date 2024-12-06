// stilos
export const customStyles = {
  control: (base) => ({
    ...base,
    fontFamily: '"roboto regular", sans-serif',
    color: "#565656",
    background: "#e6e6e6",
    border: "1px solid #d9d9d9",
    borderRadius: "5px",
    border: "1px solid #919191",
    padding: "5px",
    fontSize: "14px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#333333", // Cambiado a gris
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
    color: state.isFocused ? "#0073e6" : "#565656",
    padding: "10px",
    cursor: "pointer",
    fontFamily: '"roboto regular", sans-serif',

    fontSize: "14px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#565656", // Cambiado a gris
    fontFamily: '"roboto regular", sans-serif',
  }),
  placeholder: (base) => ({
    ...base,
    color: "#565656",
    fontFamily: '"roboto regular", sans-serif',
  }),
};

export const customStylesError = {
  control: (base) => ({
    ...base,
    fontFamily: '"roboto regular", sans-serif',
    color: "#565656",
    background: "#FAF1F1 ",
    border: "1px solid #E92243",
    borderRadius: "8px",
    padding: "5px",
    fontSize: "14px",
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
    fontFamily: '"roboto regular", sans-serif',
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f8ff" : "#ffffff",
    color: state.isFocused ? "#0073e6" : "#333333",
    padding: "10px",
    cursor: "pointer",
    fontFamily: '"roboto regular", sans-serif',
    fontSize: "14px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    fontFamily: '"roboto regular", sans-serif',
    color: "#666666",
  }),
  placeholder: (base) => ({
    ...base,
    fontFamily: '"roboto regular", sans-serif',
    color: "#565656",
  }),
};
