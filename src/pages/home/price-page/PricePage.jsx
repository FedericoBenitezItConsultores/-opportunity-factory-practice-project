import React from "react";
import styles from "./styles.module.css";
import PriceTemplate from "../../../components/template/price-template/PriceTemplate";
import Input from "../../../components/atoms/input/Input";

export default function PricePage() {
  console.log('first')
  return (
    <div>
      {/* <Input placeholder={"Nuevo valor"} /> */}
      <PriceTemplate />
      
     
    </div>
  );
}
