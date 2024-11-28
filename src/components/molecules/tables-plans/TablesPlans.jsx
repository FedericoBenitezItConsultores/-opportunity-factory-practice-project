import styles from "./styles.module.css";
export default function TablesPlans({ plan }) {
  if (!plan) return;
  return (
    <div className={styles.div_root}>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead className={styles.coverturas}>
          <tr>
            <th>3 coberturas</th>
            <th>Capital</th>
            <th>Deducibles</th>
          </tr>
        </thead>
        
        <tbody className={styles.tbody}>
          {plan.coberturas.map((cobertura, index) => (
            <tr key={index}>
              <td className={styles.cell}>{cobertura.cobertura}</td>

              {cobertura.capital && typeof cobertura.capital === "number" ? (
                <td className={styles.cell}>{cobertura.capital}</td>
              ) : (
                <td className={styles.cell}>
                  {cobertura.capital && (
                    <select className={styles.select}>
                      {cobertura.capital?.map((item, idx) => (
                        <option key={idx}>{item}</option>
                      ))}
                    </select>
                  )}
                </td>
              )}
              <td className={styles.cell}>{cobertura.deducibles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
