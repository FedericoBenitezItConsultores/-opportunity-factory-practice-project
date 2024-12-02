import React from "react";
import style from "./CardDiscount.module.css";

const CardDiscount = () => {
  return (
    <div className={style.parentContainer}>
      <div className={style.CardDiscount}>
        <div className={style.bgImagen}>
          <img src="Group8.svg" alt="" height="222" width="505" />
          <img
            src="Layer_2.svg"
            alt=""
            className={style.layer2Image}
            height="180"
            width="180"
          />
        </div>
        <div className={style.containerText}>
          <div className={style.title}>Tienes un descuento</div>
          <div>
            <div className={style.text}>
              De acuerdo al expertis del conductor,
            </div>
            <div className={style.text2}>el porcentaje de descuento es:</div>
          </div>
          <div className={style.discount}>20% OFF</div>
        </div>
      </div>
    </div>
  );
};

export default CardDiscount;
