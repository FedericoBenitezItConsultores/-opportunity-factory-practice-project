import React from "react";
import CardDiscount from "./components/collections/card-discount/CardDiscount";
import imgFirst from "../../assets/icons/svg/Group8.svg"
import imgSecond from "../../assets/icons/svg/Wedding_Yellow.svg"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function PersonPage() {

  return (
    <div>
      PersonPage
      <CardDiscount />

      <CardDiscount
         title={<span style={{ marginLeft: "-30px" }}>Descuento de cónyuge</span>}
        text1="El porcentaje de descuento es:"
        imgSrc={imgFirst} 
        layerImageSrc={imgSecond}
        style={{ marginLeft: "-370px" }}
        porcentaje={{
          text: "30% OFF", 
          color: "#FF6347", 
          textDescuento: "No aplica por descuento menor. Se aplica descuento de cónyuge.",
          bg: "#FFF0E0",
          icon: CheckCircleOutlineIcon, 
          colorIcon: "#FF4500", 
        }}
      />
    </div>
  );
}
