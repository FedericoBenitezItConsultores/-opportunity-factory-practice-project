import styles from "./styles.module.css";
import icon_done from "../../../assets/svg/icon_done.svg";

export default function TableAsistencia({ plan }) {
  if (!plan) return;
  return (
    <div className={styles.div_root}>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead className={styles.coverturas}>
          <tr>
            <th>Asistencia</th>
            <th>Capital</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {plan.asistencias.map((asistencia, index) => (
            <tr key={index}>
              <td className={styles.cell}>
                {asistencia.typeCheck === "icon_done" && (
                  <img src={icon_done} alt="" />
                )}
                {asistencia.typeCheck === "square" && (
                  <span className={styles.square}> </span>
                )}{" "}
                {asistencia.asisitecia}
              </td>
              {asistencia.capital && typeof asistencia.capital === "number" ? (
                <td className={styles.cell}>{asistencia.capital}</td>
              ) : (
                <td className={styles.cell}>
                  {asistencia.capital && (
                    <select className={styles.select}>
                      {asistencia.capital?.map((item, idx) => (
                        <option key={idx}>{item}</option>
                      ))}
                    </select>
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
