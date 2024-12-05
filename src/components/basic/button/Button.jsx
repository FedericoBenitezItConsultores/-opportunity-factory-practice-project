import styles from "./Button.module.css";

const STYLES_BUTTON = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const Button = ({ children, typeStyle = "primary", ...props }) => {
  return (
    <button {...props} className={STYLES_BUTTON[typeStyle]}>
      {children}
    </button>
  );
};

export default Button;
