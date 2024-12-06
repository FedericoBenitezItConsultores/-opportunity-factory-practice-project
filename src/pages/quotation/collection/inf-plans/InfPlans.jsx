import styles from "./styles.module.css";
import img_financing from "../../../../assets/icons/svg/alertBlue.svg";
import img_arrow_down from "../../../../assets/icons/svg/arrow_up.svg";
import IconsBackCircle from "../../../../assets/icons/svg/arrow_down.svg";
import { useState } from "react";
import TableQuotattion from "../../basic/table-quotattion/TableQuotattion";
import { PanelInformation } from "../../../../components/collections/panel-box/PanelInformation";
export default function InfPlans({ plan }) {
  const [infTables, setInfTables] = useState(true);

  return (
    <div className={styles.div_root1}>
      <div style={{ cursor: "pointer", backgroundColor: "red" }}>
        <img
          onClick={() => setInfTables(!infTables)}
          className={styles.img_arrow_down}
          src={infTables ? img_arrow_down : IconsBackCircle}
          alt="img_arrow_down"
        />
      </div>
      <div className={styles.panel_information}>
        <PanelInformation
          parrafo1="En este plan no están seleccionadas las siguientes coberturas, puedes agregarlas de manera opcional:"
          parrafo2={
            <span style={{ marginLeft: "25px" }}>
              - Pérdida parcial por daños y Pérdida parcial por hurto
            </span>
          }
        />
      </div>
      {plan && (
        <>
          <div>
            <div
              style={{
                backgroundColor: plan.styles_tables.bg,
                color: plan.styles_tables.color,
              }}
              className={styles.title_table}
            >
              <h1>Coberturas {plan.name}</h1>
            </div>
            {plan.coberturas.length > 0 ? (
              <TableQuotattion
                plan={plan}
                infTables={infTables}
                dataKey="coberturas"
                headers={["Coberturas", "Capital", "Deducibles"]}
              />
            ) : (
              <div style={{ display: "flex", justifyContent: "left" }}>
                <div
                  style={{
                    width: "93%",
                    borderTop: "1px #C0BFC0 solid",
                    marginLeft: "31px",
                  }}
                />
              </div>
            )}
          </div>
          <div style={{ paddingBottom: "25px" }}>
            <div
              style={{
                marginTop: plan.coberturas.length > 0 ? "100px" : "40px",
                backgroundColor: plan.styles_tables.bg,
                color: plan.styles_tables.color,
              }}
              className={styles.title_table}
            >
              <h1>Asistencias {plan.name}</h1>
            </div>
            {plan.asistencias.length > 0 ? (
              <TableQuotattion
                plan={plan}
                infTables={infTables}
                dataKey="asistencias"
                headers={["Asistencia", "Capital"]}
              />
            ) : (
              <br />
            )}
          </div>
        </>
      )}
    </div>
  );
}
