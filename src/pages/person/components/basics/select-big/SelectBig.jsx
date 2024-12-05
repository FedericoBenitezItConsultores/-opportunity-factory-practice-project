import React from "react";
import Select from "react-select";
import citys, { customStyles } from "./utils/stylesSelect";

const SelectCity = () => {
  const handleCityChange = (selectedOption) => {
    console.log("Ciudad seleccionada:", selectedOption);
  };

  return (
    <div style={{ position: "relative" }}>
      <Select
        options={citys} 
        styles={customStyles} 
        placeholder="Ciudad de movilización *"
        onChange={handleCityChange}
        isSearchable={true}
        menuPlacement="top"  
        menuPosition="absolute"
      />
    </div>
  );
};

export default SelectCity;
