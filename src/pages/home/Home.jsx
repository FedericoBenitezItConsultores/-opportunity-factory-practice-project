import React from "react";
import MainLayout from "../../components/template/MainLayout";
import styles from "./Home.module.css";
import icon_left from "../../assets/Icon-Left.png";

const Home = () => {
  return (
    <MainLayout>
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
        <button className={styles.button}>Ir a mis negocios</button>
      </div>
    </MainLayout>
  );
};

export default Home;