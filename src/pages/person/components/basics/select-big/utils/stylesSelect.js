export const customStyles = {
  control: (base) => ({
    ...base,
    background: "#fff",
    border: "1px solid #919191",
    borderRadius: "5px",
    fontSize: "14px",
    width: "377px",
    height: "50px", // Mayor altura para el control
    position: "relative", // Necesario para posicionar el label
    color: "#333333",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #28A3AF",
    },
    fontFamily: '"Segoe UI", sans-serif',
  }),
  valueContainer: (base) => ({
    ...base,
    marginBottom: "-20px",
    width: "80px",
    height: "50px",
    padding: "0 0 0 5px",
    alignItems: "flex-start",
    marginTop: "25px",
    fontFamily: '"Segoe UI", sans-serif',
  }),
  placeholder: (base, state) => ({
    ...base,
    marginTop: "-10px",
    position: "relative",
    top: state.isFocused || state.hasValue ? "-15px" : "50%",
    fontSize: state.isFocused || state.hasValue ? "12px" : "14px",
    transform:
      state.isFocused || state.hasValue
        ? "translateY(15px)"
        : "translateY(5px)",
    transition: "all 0.4s ease",
    pointerEvents: "none",
    color: "#707070",
    fontFamily: '"Segoe UI", sans-serif',
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
    fontFamily: '"Segoe UI", sans-serif',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f8ff" : "#ffffff",
    color: state.isFocused ? "#0073e6" : "#333333",
    padding: "10px",
    cursor: "pointer",
    fontFamily: '"Segoe UI", sans-serif',
    fontSize: "14px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    fontFamily: '"Segoe UI", sans-serif',
    color: "#333333",
  }),
};
export const citisStylesError = {
  control: (base) => ({
    ...base,
    background: "#FAF1F1 ",
    border: "1px solid #E92243",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "14px",
    width: "377px",
    height: "50px",
    position: "relative",
    fontFamily: '"Segoe UI", sans-serif',

    color: "#000",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#ff0000",
    },
  }),

  menu: (base) => ({
    ...base,
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    fontFamily: '"Segoe UI", sans-serif',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f8ff" : "#ffffff",
    color: state.isFocused ? "#0073e6" : "#333333",
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
    fontFamily: '"Segoe UI", sans-serif',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#0073e6",
    fontFamily: '"Segoe UI", sans-serif',
  }),
  placeholder: (base) => ({
    ...base,
    color: "#000",
    fontFamily: '"Segoe UI", sans-serif',
  }),
};
