import styles from "./Button.module.css";

const STYLES_BUTTON = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const Button = ({
  children,
  typeStyle = "primary",
  style = { minWidth: "252px",  padding: '15.48px 70.6px 13.52px 67.4px' },
  ...props
}) => {
  return (
    <button style={style} {...props} className={STYLES_BUTTON[typeStyle]}>
      {children}
    </button>
  );
};

export default Button;
