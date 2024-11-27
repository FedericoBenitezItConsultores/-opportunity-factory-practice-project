import React from "react";
import styles from "./styles.module.css";
import PlansPrice from "../../organisms/PlansPrice";
export default function PriceTemplate() {
  return (
    <div className={styles.div_father}>
      <h1 className={styles.title}>Cotización</h1>
      <p className={styles.sub_title}>
        Listo, te sugerimos un paquete recomendado, sin embargo puedes
        personalizarlo de acuerdo a la necesidad.
      </p>
      <div className={styles.div_plan_price}>
        <PlansPrice />
      </div>
    </div>
  );
}
