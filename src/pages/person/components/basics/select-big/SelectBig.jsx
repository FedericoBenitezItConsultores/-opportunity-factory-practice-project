import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { citisStylesError, customStyles } from "./utils/stylesSelect";
import styles from "./SelectBig.module.css";
import imgWarning from "../../../../../assets/icons/svg/warningError.svg";

const SelectBig = ({
  options,
  placeholder = "Ciudad de movilización",
  menuPlacement = "top",
  control,
  name,
  onChange,
  rules,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <>
              <p
                style={{
                  top: field.value ? "-1px" : "-0px",
                  left: "5px",
                  marginTop: field.value ? "-1px" : "15px",
                  fontSize: field.value ? "14px" : "20px",
                  transition: "all 0.3s ease",
                  zIndex: 2,
                }}
                className={styles.p_text}
              >
                {placeholder} <span style={{ color: "#28A3AF" }}>*</span>
              </p>

              <Select
                {...field}
                options={options}
                styles={error?.message ? citisStylesError : customStyles}
                placeholder={" "}
                menuPlacement={menuPlacement}
                isSearchable
                onChange={(selectedOption) => {
                  field.onChange(selectedOption); // React Hook Form controla el valor
                  if (onChange) onChange(selectedOption);
                }}
                onBlur={field.onBlur}
                value={field.value}
                {...props}
              />
              {error && (
                <div className={styles.container_error}>
                  <img src={imgWarning} alt="" />
                  <p>{error.message}</p>
                </div>
              )}
            </>
          )}
        />
      </label>
    </div>
  );
};

export default SelectBig;
