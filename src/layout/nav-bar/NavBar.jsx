import styles from "./NavBar.module.css";
import logo from "../../assets/icons/png/Logo-Principal.png";
import Profile from "../../assets/icons/png/Profile.png";
import page_tab from "../../assets/icons/png/arrow_down.png";
import Triangle from "../../assets/icons/png/Triangle.png";
import icon_left from "../../assets/icons/png/icon-left.png";
import { steps } from "./steps-navbar";
import Button from "../../components/basic/button/Button";
const Navbar = () => {
  return (
    <div>
      <div className={styles.container2}>
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.rightSection}>
          <img src={page_tab} alt="page_tab" />
          <span className={styles.name}>Andrés Salamanca</span>
          <img src={Profile} alt="Profile" className={styles.profile} />
          <button className={styles.button2}>Cerrar sesión</button>
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.price}>
          <span className={styles.title}>Cotización</span>
          <b className={styles.id}>100030819</b>
        </div>
        <div className={styles.container3_2}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepContainer}>
              {/* bolita */}
              <div className={`${styles.stepNumber} ${styles[step.state]} `}>
                {index + 1}
              </div>
              {/* informacion */}
              <span
                className={`${styles.stepText} ${
                  step.state !== "completed" ? styles.cotizacionFinal : ""
                }`}
              >
                {step.text}
              </span>
              {/* divicion */}
              {index < steps.length - 1 && (
                <div
                  className={`${styles.divider} ${
                    index === 2 ? styles.divider3 : ""
                  }`}
                />
              )}
            </div>
          ))}
          <img src={Triangle} alt="Triangle" className={styles.triangle} />
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.container}>
          <div>
            <p className={`${styles.title} ${styles.grey}`}>Póliza Express</p>
            <img src={icon_left} alt="icon_left" className={styles.arrow} />
            <p className={`${styles.title} ${styles.grey}`}>
              Mis negocios en línea
            </p>
            <img src={icon_left} alt="icon_left" className={styles.arrow} />
            <p className={`${styles.title} ${styles.blue}`}>Nueva cotización</p>
          </div>
          <Button
            typeStyle="secondary"
            // styles={{ width: "200px", height: "20px" }}
          >
            Ir a mis negocios
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
