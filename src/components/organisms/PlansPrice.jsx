import React, { useState } from "react";
import { plans } from "../../utils/plans";
import CardPlan from "../molecules/card-plan/CardPlan";
import styles from "./styles.module.css";
import TablesPlans from "../molecules/tables-plans/TablesPlans";
export default function PlansPrice() {
  const [planSelect, setPlanSelect] = useState(null);
  console.log(planSelect);
  return (
    <div>
      <div className={styles.div_root}>
        {plans.map((plan) => (
          <CardPlan
            key={plan.id}
            {...plan}
            setPlanSelect={setPlanSelect}
            planSelect={planSelect}
          />
        ))}
      </div>
      <TablesPlans />
      <div className={styles.div_table}>
        <h1>{planSelect?.name}</h1>
      </div>
    </div>
  );
}
