import styles from "./styles.module.css";
export default function TablesPlans({ plan }) {
  if (!plan) return;
  return (
    <div className={styles.div_root}>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>coberturas</th>
            <th>Capital</th>
            <th>Deducibles</th>
          </tr>
        </thead>
        <tbody>
          {plan.coberturas.map((cobertura) => (
            <tr>
              <td>{cobertura.cobertura}</td>
              {cobertura.capital && typeof cobertura.capital === "number" ? (
                <td>{cobertura.capital}</td>
              ) : (
                <td>
                  {cobertura.capital && (
                    <select>
                      {cobertura.capital?.map((item) => (
                        <option>{item}</option>
                      ))}
                    </select>
                  )}
                </td>
              )}

              <td>{cobertura.deducibles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
