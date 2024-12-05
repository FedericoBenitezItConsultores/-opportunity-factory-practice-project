import React from "react";
import Select from "react-select";
import { dayOptions, monthOptions, yearOptions } from "./utils/dateInf.js";

const SelectSmall = ({ formData, handleDayChange, handleMonthChange, handleYearChange }) => {
  return (
    <div style={{ position: "relative", margin: "20px 90px 20px 0" }} className="info_date">
      <p className="gender_birth">
        Fecha de nacimiento
        <span style={{ color: "#28A3AF" }}>*</span>
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ position: "relative" }}>
          {/* Día */}
          <Select
            options={dayOptions}
            placeholder="Día"
            onChange={handleDayChange}
            isSearchable={false}
            menuPlacement="top"
          />
        </div>
        <div style={{ position: "relative" }}>
          {/* Mes */}
          <Select
            options={monthOptions}
            placeholder="Mes"
            onChange={handleMonthChange}
            isSearchable={false}
            menuPlacement="top"
          />
        </div>
        <div style={{ position: "relative" }}>
          {/* Año */}
          <Select
            options={yearOptions}
            placeholder="Año"
            onChange={handleYearChange}
            isSearchable={false}
            menuPlacement="top"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectSmall;
