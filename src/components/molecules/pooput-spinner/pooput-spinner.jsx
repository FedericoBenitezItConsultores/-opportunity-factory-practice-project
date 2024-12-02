import React from "react";
import styles from "./styles.module.css";
import Group from "../../../../public/Group.svg";
import LoadingImg from "../../../../public/LoadingImg.svg";
const Spinner = ({ showText = false }) => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div style={{ position: "relative" }}>
          <img alt="" src={Group} className={styles.logo} />
          <img alt="" src={LoadingImg} className={styles.img} />
        </div>
      </div>
      {!showText && (
        <div className={styles.parrafos}>
          <p className={styles.parrafo}>
            Este proceso puede tardar algunos segundos más,<br/> por favor espera
            mientras seguimos realizando la consulta.
          </p>
        </div>
      )}
    </div>
  );
};
export default Spinner;
