import React, { useState } from "react";
import { Input } from "../../basics/input/Input";
import styles from "./styles.module.css";
import SelectBirth from "../../basics/select-small/SelectBirth";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import SelectBig from "../../basics/select-big/SelectBig";
import { citys } from "../../basics/select-big/utils/citys";
import { Controller } from "react-hook-form";
import imgWarning from "../../../../../assets/icons/svg/warningError.svg";
export default function FormInfPerson({
  register,
  errors,
  control,
  formValues,
  setError,
  clearErrors,
}) {
  return (
    <div className={styles.container_form}>
      <div className={styles.container_input}>
        <Input
          control={control}
          name={"firstName"}
          label="Primer nombre"
          textError={errors?.firstName?.message}
          id={"firstName"}
          {...register("firstName", { required: "El nombre es obligatorio" })}
          TypeStyle={errors?.firstName?.message ? "secondary" : "primary"}
        />
        <Input
          control={control}
          name={"firstLastName"}
          label="Primer apellido"
          textError={errors?.firstLastName?.message}
          id={"firstLastName"}
          {...register("firstLastName", {
            required: "El apellido es obligatorio",
          })}
          TypeStyle={errors?.firstLastName?.message ? "secondary" : "primary"}
        />
      </div>

      <div className={styles.container_input2}>
        <div
          className={
            errors.gender
              ? styles.container_genders_error
              : styles.container_genders
          }
        >
          {errors.gender && (
            <div className={styles.container_error_gender}>
              <img src={imgWarning} alt="Error" />
              <p>{errors.gender.message}</p>
            </div>
          )}
          <div>
            <span>
              Género <b>*</b>
            </span>
            <div className={styles.container_gender}>
              <Controller
                name="gender"
                control={control}
                rules={{ required: "El género es requerido" }}
                render={({ field }) => (
                  <div onClick={() => field.onChange("masculino")}>
                    {field.value === "masculino" ? (
                      <RadioButtonCheckedIcon sx={{ color: "#707070" }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ color: "#707070" }} />
                    )}
                    <p>Masculino</p>
                  </div>
                )}
              />
            </div>
          </div>

          <div className={styles.container_gender}>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "El género es requerido" }}
              render={({ field }) => (
                <div onClick={() => field.onChange("femenino")}>
                  {field.value === "femenino" ? (
                    <RadioButtonCheckedIcon sx={{ color: "#707070" }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ color: "#707070" }} />
                  )}
                  <p>Femenino</p>
                </div>
              )}
            />
          </div>
        </div>

        <div className={styles.container_birth}>
          <p className={styles.text_date_birth}>
            Fecha de nacimiento <b>*</b>
          </p>
          <SelectBirth
            control={control}
            errors={errors}
            formValues={formValues}
            setError={setError}
            clearErrors={clearErrors}
          />
        </div>
      </div>
      <div className={styles.container_input3}>
        <div style={{ marginBottom: "35px" }}>
          <Input
            control={control}
            name={"yearsOfExperience"}
            label="Años de experiencia"
            id={"yearsOfExperience"}
            {...register("yearsOfExperience", {
              required: "El campo es obligatorio",
              validate: (value) => {
                if (isNaN(value)) {
                  return "Solo se permiten números";
                }
                if (value < 0) {
                  return "El número debe ser positivo";
                }
                return true;
              },
            })}
            TypeStyle={
              errors?.yearsOfExperience?.message ? "secondary" : "primary"
            }
            type="number"
            style={{ padding: "30px 0 0 5px" }}
          />
        </div>
        <SelectBig
          name="ciudad"
          control={control}
          options={citys}
          placeholder="Selecciona una ciudad"
          rules={{ required: "Debes seleccionar una ciudad" }}
          errors={errors}
        />
      </div>
    </div>
  );
}
