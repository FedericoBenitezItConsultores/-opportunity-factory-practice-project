import styles from "./styles.module.css";
import img_financing from "../../../assets/svg/CombinedShape.svg";
import img_arrow_down from "../../../assets/svg/Icon-Arrowdown.svg";
import TablesPlans from "./TablesPlans";
export default function InfPlans({ plan }) {
  return (
    <div className={styles.div_root}>
      <img className={styles.img_arrow_down} src={img_arrow_down} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.div_inf}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img className={styles.financing_icon} src={img_financing} />
          <p className={styles.p_inf}>
            En este plan no están seleccionadas las siguientes coberturas,
            puedes agregarlas de manera opcional:
          </p>
        </div>
        <p className={styles.p_inf_2}>
          - Pérdida parcial por daños y Pérdida parcial por hurto
        </p>
      </div>
      <TablesPlans plan={plan} />
    </div>
  );
}
