import React from "react";
import Select from "react-select";
import { dayOptions, monthOptions, yearOptions } from "./utils/dateInf.js";
import { customStyles, customStylesError } from "./utils/styles.js";

const SelectBirth = ({
  formData,
  handleDayChange,
  handleMonthChange,
  handleYearChange,
}) => {
  return (
    <div
      style={{ position: "relative", margin: "20px 90px 20px 0" }}
      className="info_date"
    >
      <div style={{ display: "flex", gap: "12px" }}>
        <div style={{ position: "relative" }}>
          {/* Día */}
          <Select
            styles={true ? customStyles : customStylesError}
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
            styles={true ? customStyles : customStylesError}
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
            styles={true ? customStyles : customStylesError}
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

export default SelectBirth;
