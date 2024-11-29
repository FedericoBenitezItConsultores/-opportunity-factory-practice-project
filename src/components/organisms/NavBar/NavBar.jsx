import React, { Profiler } from "react";
import styles from "../NavBar/NavBar.module.css";
import logo from "../../../assets/png/Logo-Principal.png";
import Profile from "../../../assets/png/Profile.png";
import page_tab from "../../../assets/png/page-tab.png";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.container}>
        <div className={styles.rightSection}>
          <img src={page_tab} alt="page_tab" />
          <span className={styles.name}>Andrés Salamanca</span>
          <img src={Profile} alt="Profile" className={styles.profile} />
          <button className={styles.button}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
