import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import icon_done from "../../../../assets/icons/svg/checked_green.svg";

export default function TableQuotattion({ plan, infTables, dataKey, headers }) {
  const [arrayInf, setArrayInf] = useState([]);

  useEffect(() => {
    if (plan && infTables) {
      setArrayInf(plan[dataKey] || []);
    } else {
      setArrayInf([]);
    }
  }, [infTables, plan, dataKey]);

  if (!plan || arrayInf.length <= 0) return null;

  return (
    <div className={styles.div_root}>
      <table className={styles.table} style={{ width: "100%" }}>
        <thead className={styles.coverturas}>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {arrayInf.map((item, index) => (
            <tr className={styles.row} key={index}>
              <td className={styles.cell}>
                {item.typeCheck === "icon_done" && (
                  <img style={{ marginRight: "10px" }} src={icon_done} alt="" />
                )}
                {item.typeCheck === "square" && (
                  <span className={styles.square}> </span>
                )}
                {item.asisitecia || item.cobertura}
              </td>

              {headers.includes("Capital") && (
                <td className={styles.cell}>
                  {typeof item.capital === "number" ? (
                    `$${item.capital.toLocaleString("es-ES").replace(".", "'")}`
                  ) : item.capital ? (
                    <select className={styles.select}>
                      {item.capital.map((capitalItem, idx) => (
                        <option key={idx}>
                          {typeof capitalItem === "number"
                            ? `$${capitalItem
                                .toLocaleString("es-ES")
                                .replace(".", "'")}`
                            : capitalItem}
                        </option>
                      ))}
                    </select>
                  ) : (
                    ""
                  )}
                </td>
              )}

              {headers.includes("Deducibles") && (
                <td className={styles.cell}>
                  {typeof item.deducibles === "number" ? (
                    `$${item.deducibles
                      .toLocaleString("es-ES")
                      .replace(".", "'")}`
                  ) : item.deducibles ? (
                    <select className={styles.select}>
                      {item.deducibles.map((deductibleItem, idx) => (
                        <option key={idx}>
                          {deductibleItem
                            .toLocaleString("es-ES")
                            .replace(".", "'")}
                        </option>
                      ))}
                    </select>
                  ) : (
                    ""
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
