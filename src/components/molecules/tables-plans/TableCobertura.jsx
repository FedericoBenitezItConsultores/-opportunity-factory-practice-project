import styles from "./styles.module.css";
import icon_done from "../../../assets/svg/icon_done.svg";

export default function TableCobertura({ plan }) {
  if (!plan) return null;

  return (
    <div className={styles.div_root}>
      <table className={styles.table}>
        <thead className={styles.coverturas}>
          <tr>
            <th>coberturas</th>
            <th>Capital</th>
            <th>Deducibles</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {plan.coberturas.map((cobertura, index) => (
            <tr className={styles.row} key={index}>
              <td className={styles.cell}>
                {cobertura.typeCheck === "icon_done" && (
                  <img src={icon_done} alt="" />
                )}
                {cobertura.typeCheck === "square" && (
                  <span className={styles.square}> </span>
                )}{" "}
                {cobertura.cobertura}
              </td>

              <td className={styles.cell}>
                {typeof cobertura.capital === "number" ? (
                  `$${cobertura.capital
                    .toLocaleString("es-ES")
                    .replace(".", "'")}`
                ) : cobertura.capital ? (
                  <select className={styles.select}>
                    {cobertura.capital.map((item, idx) => (
                      <option key={idx}>
                        ${item.toLocaleString("es-ES").replace(".", "'")}
                      </option>
                    ))}
                  </select>
                ) : (
                  ""
                )}
              </td>

              <td className={styles.cell}>
                {typeof cobertura.deducibles === "number" ? (
                  `$${cobertura.deducibles
                    .toLocaleString("es-ES")
                    .replace(".", "'")}`
                ) : cobertura.deducibles ? (
                  <select className={styles.select}>
                    {cobertura.deducibles.map((item, idx) => (
                      <option key={idx}>
                        {item.toLocaleString("es-ES").replace(".", "'")}
                      </option>
                    ))}
                  </select>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
