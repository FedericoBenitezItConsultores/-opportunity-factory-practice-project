import React, { useState } from "react";
import { Input } from "../../../../../components/basic/input/Input";
import styles from "./styles.module.css";
import SelectBirth from "../../basics/select-small/SelectBirth";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import SelectBig from "../../basics/select-big/SelectBig";
export default function FormInfPerson() {
  const [checked, setChecked] = useState("");
  return (
    <div className={styles.container_form}>
      <div className={styles.container_input}>
        <Input
          onChange={() => console.log("object")}
          label="Primer nombre"
          TypeStyle="primary"
          textError="Este campo no puede quedar vacío"
        />
        <Input
          onChange={() => console.log("object")}
          label="Primer apellido"
          TypeStyle="primary"
          textError="Este campo no puede quedar vacío"
        />
      </div>

      <div className={styles.container_input}>
        <div className={styles.container_genders}>
          <div onClick={() => setChecked("masculino")}>
            <span>
              Género <b>*</b>
            </span>
            {checked === "masculino" ? (
              <RadioButtonCheckedIcon
                sx={{ color: true ? "#707070" : "#E92243 " }}
              />
            ) : (
              <RadioButtonUncheckedIcon
                sx={{ color: true ? "#707070" : "#E92243 " }}
              />
            )}
            <p>Masculino</p>
          </div>
          <div onClick={() => setChecked("femenino")}>
            {checked === "femenino" ? (
              <RadioButtonCheckedIcon
                sx={{ color: true ? "#707070" : "#E92243 " }}
              />
            ) : (
              <RadioButtonUncheckedIcon
                sx={{ color: true ? "#707070" : "#E92243 " }}
              />
            )}
            <p>Femenino</p>
          </div>
        </div>
        <div className={styles.container_birth}>
          <SelectBirth />
        </div>
      </div>
      <div className={styles.container_input}>
        <div style={{ width: "375px" }}>
          <Input
            onChange={() => console.log("object")}
            label="Primer nombre"
            TypeStyle="primary"
            textError="Este campo no puede quedar vacío"
          />
        </div>
        <SelectBig />
      </div>
    </div>
  );
}
