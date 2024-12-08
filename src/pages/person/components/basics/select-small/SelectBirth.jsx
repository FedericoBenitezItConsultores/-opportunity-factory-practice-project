import React, { useEffect } from "react";
import Select from "react-select";
import { dayOptions, monthOptions, yearOptions } from "./utils/dateInf.js";
import { customStyles, customStylesError } from "./utils/styles.js";
import { Controller } from "react-hook-form";
import styles from "./styles.module.css";
import imgWarning from "../../../../../assets/icons/svg/warningError.svg";
const SelectBirth = ({
  control,
  errors,
  formValues,
  setError,
  clearErrors,
}) => {
  useEffect(() => {
    const { day, month, year } = formValues;
    if (!day || !month || !year) return;
    const birthDate = new Date(year.value, month.value - 1, day.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());
    const finalAge = isBirthdayPassed ? age : age - 1;
    if (finalAge < 18) {
      if (!errors.birthDate)
        setError("birthDate", {
          type: "manual",
          message:
            "No cumple con la política de edad mínima/máxima del conductor",
        });
      return;
    }
    if (errors.birthDate) {
      clearErrors("birthDate");
    }
  }, [formValues, errors, setError, clearErrors]);
  return (
    <div
      style={{ position: "relative", margin: "20px 90px 20px 0" }}
      className="info_date"
    >
      <div className={styles.container_error}>
        {(errors?.birthDate ||
          errors?.day ||
          errors?.month ||
          errors?.year) && <img src={imgWarning} />}
        {errors?.birthDate && <p>{errors?.birthDate?.message}</p>}
        {(errors?.day || errors?.month || errors?.year) && (
          <p>
            {errors?.day?.message ||
              errors?.month?.message ||
              errors?.year?.message}
          </p>
        )}
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        {/* Día */}
        <div style={{ position: "relative" }}>
          <Controller
            name="day"
            control={control}
            rules={{ required: "campo es requerido" }}
            render={({ field }) => (
              <Select
                {...field}
                styles={
                  errors?.birthDate || errors?.day
                    ? customStylesError
                    : customStyles
                }
                options={dayOptions}
                placeholder="Día"
                isSearchable={false}
                menuPlacement="top"
              />
            )}
          />
        </div>

        {/* Mes */}
        <div style={{ position: "relative" }}>
          <Controller
            name="month"
            control={control}
            rules={{ required: "campo es requerido" }}
            render={({ field }) => (
              <Select
                {...field}
                styles={
                  errors?.birthDate || errors.month
                    ? customStylesError
                    : customStyles
                }
                options={monthOptions}
                placeholder="Mes"
                isSearchable={false}
                menuPlacement="top"
              />
            )}
          />
        </div>

        {/* Año */}
        <div style={{ position: "relative" }}>
          <Controller
            name="year"
            control={control}
            rules={{ required: "campo es requerido" }}
            render={({ field }) => (
              <Select
                {...field}
                styles={
                  errors?.birthDate || errors.year
                    ? customStylesError
                    : customStyles
                }
                options={yearOptions}
                placeholder="Año"
                isSearchable={false}
                menuPlacement="top"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectBirth;
