import React from "react";
import { Input } from "../../components/basic/input/Input";
import FormInfPerson from "./components/collections/form-inf-person/FormInfPerson";
import style from "./styles.module.css";
export default function PersonPage() {
  return (
    <div className={style.container_main}>
      <h1 className={style.persona}>Persona</h1>
      <p className={style.information}>
        Ingresa la información de la persona, conocerla es importante para hacer
        una propuesta
      </p>
      <p className={style.information2}>acorde a sus necesidades</p>
      <p className={style.parragraf}>Los campos con (*) son obligatorios</p>

      <FormInfPerson />
    </div>
  );
}
