import React from "react";
import style from "./CardDiscount.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imgFirst from "../../../../../assets/icons/svg/Group8.svg"
import imgSecond from "../../../../../assets/icons/svg/Layer_2.svg"


const CardDiscount = ({
  title = "Tienes un descuento", 
  text1 = "De acuerdo al expertis del conductor,", 
  porcentaje = {
    text: "20% OFF", 
    color: "#28a3af", 
    textDescuento: "Aplica descuento mayor", 
    bg: "#E1F2E6", 
    icon: CheckCircleOutlineIcon, 
    colorIcon: "#00aa00", 
    img: null, 
  },
  imgSrc = imgFirst, 
  layerImageSrc = imgSecond, 
}) => {
  return (
    <div className={style.parentContainer}>
      <div className={style.CardDiscount}>
        <div className={style.bgImagen}>
          <img src={imgSrc} alt="Imagen de descuento" height="222" width="505" />
          {layerImageSrc && <img src={layerImageSrc} alt="Imagen de capa" className={style.layer2Image} />}
        </div>
        <div className={style.containerText}>
          <div className={style.title}>{title}</div>
          <div>
            <div className={style.text}>{text1}</div>
            <div className={style.text2}>el porcentaje de descuento es:</div>
          </div>
          <div style={{ color: porcentaje.color }} className={style.discount}>
            {porcentaje.text}
          </div>
          <div className={style.DivtextDescuento}>
            <div
              style={{ backgroundColor: porcentaje.bg }}
              className={style.textDescuento}
            >
              <porcentaje.icon sx={{ color: porcentaje.colorIcon }} />
              <p>{porcentaje.textDescuento}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDiscount;
