import React, { useState } from "react";
import styles from "./styles.module.css";
// import InfPlans from "../molecules/tables-plans/InfPlans";
import { plans } from "../../../../utils/plans";
import CardPlan from "../../basic/card-plan/CardPlan";
import InfPlans from "../inf-plans/InfPlans";
export default function PanelPlans() {
  const [planSelect, setPlanSelect] = useState(plans[0]);
  return (
    <div style={{ paddingTop: "80px", backgroundColor: "#fff" }}>
      <div className={styles.div_root}>
        {plans.map((plan) => (
          <CardPlan
            key={plan.id}
            quantityPlans={plans.length}
            {...plan}
            setPlanSelect={setPlanSelect}
            planSelect={planSelect}
          />
        ))}
      </div>
      <div className={styles.container_tables}>
        <InfPlans plan={planSelect} />
      </div>
    </div>
  );
}
