import React from 'react'
import profile from "../../../../../assets/icons/svg/profile.svg"
import identification from "../../../../../assets/icons/svg/identification.svg"

import style from "../../../../../pages/person/components/basics/panel-identification/panelIdentification.module.css"

export default function PanelIdentification() {
  return (
    <>
    
    <div id="form" className={style.containerCard}>
  <table>
    <tbody>
      <tr>
        <td>
          <div className={style.line}></div>
        </td>
        <td>
          <div className={style.Image}>
            <img src={profile} alt="Profile" />
          </div>
        </td>
        <td>
          <div>
            <div className={style.documents}>Tipo de documento</div>
            <div>Cédula de Ciudadanía</div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <table>
    <tbody>
      <tr>
        <td>
          <div className={style.line}></div>
        </td>
        <td>
          <div className={style.Image}>
            <img src={identification} alt="Identification" />
          </div>
        </td>
        <td>
          <div>
            <div className={style.documents}>Identificación</div>
            <div className={style.numberCc}>123456789</div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </>
  )
}
