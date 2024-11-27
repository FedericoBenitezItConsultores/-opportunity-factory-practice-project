import React from "react";
import styles from "./styles.module.css";
import img_financing from "../../../assets/svg/CombinedShape.svg";
import premium from "../../../assets/svg/Grupo18933.svg";
import Triangle from "../../../assets/components/Triangle.jsx";
// Grupo18933.svg;
export default function CardPlan(plan) {
  const { setPlanSelect, planSelect } = plan;

  return (
    <div className={styles.div_root}>
      <img
        className={styles.img_premium}
        src={plan.name === "Premium" ? premium : ""}
      />
      <input
        className={styles.input_select}
        type="checkbox"
        checked={planSelect?.name === plan.name}
        onChange={() => setPlanSelect(plan)}
      />
      <h3 className={styles.name}>{plan.name}</h3>
      <p className={styles.price}>
        ${plan.price.toLocaleString("es-ES").replace(".", "'")}
      </p>
      <div className={styles.div_financing}>
        <img className={styles.financing_icon} src={img_financing} />
        <p>
          Financiación ${plan.price.toLocaleString("es-ES").replace(".", "'")}/{" "}
          {plan.financing.quotas} cuotas
        </p>
      </div>
      <div className={styles.div_show_details}>
        <p>Ver detalles</p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          height: `${plan.border_button.height}px`,
          width: "100%",
          backgroundColor: plan.border_button.color,
        }}
      >
        <div className={styles.triangle}>
          {planSelect?.name === plan.name && (
            <Triangle color={plan.border_button.color} size={100} />
          )}
        </div>
      </div>
    </div>
  );
}
