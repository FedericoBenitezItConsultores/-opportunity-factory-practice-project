import React from 'react'
import profile from "../../../../../assets/icons/svg/profile.svg"
import identification from "../../../../../assets/icons/svg/identification.svg"

import style from "../../../../../pages/person/components/basics/panel-identification/panelIdentification.module.css"

export default function PanelIdentification() {
  return (
    <>
    
    <div id="form" className={style.containerCard}>
          <div>
            <table>
              <tr>
                <td>
                  <div className={style.line} />
                </td>
                <td>
                  <img className={style.Image} src={profile} alt="" />
                </td>
                <tr>
                  <td className={style.documents}>Tipo de documento</td>
                </tr>
                <tr>
                  <td>Cédula de Ciudadanía</td>
                </tr>
              </tr>
            </table>
          </div>
          <div>
            <table>
              <tr>
                <td>
                  <div className={style.line} />
                </td>
                <td>
                  <img className={style.Image} src={identification} alt="" />
                </td>
                <tr>
                  <td className={style.documents}>Identificación</td>
                </tr>
                <tr>
                  <td className={style.numberCc}>123456789</td>
                </tr>
              </tr>
            </table>
          </div>
        </div>
    </>
  )
}
