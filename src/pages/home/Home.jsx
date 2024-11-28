import React from "react";
import MainLayout from "../../components/template/MainLayout";
import styles from "./Home.module.css";
import icon_left from "../../assets/Icon-Left.png";

const Home = () => {
  return (
    <MainLayout>
      <p className={styles.title}>Póliza Express</p>
      <img src={icon_left} alt="icon_left" className={styles.arrow} />
      <p className={styles.title}>Mis negocios en linea</p>
      <img src={icon_left} alt="icon_left" className={styles.arrow}/>
      <p className={styles.title}>Nueva cotización</p>
      <button className={styles.button}>Ir a mis negocios</button>
    </MainLayout>
  );
};

export default Home;
