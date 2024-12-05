import React from "react";
import Select from "react-select";
import { customStyles } from "./utils/stylesSelect";

const SelectBig = ({options, placaholder="Ciudad de movilización *", menuPlacement='top', onChange}) => {
  return (
    <div style={{ position: "relative" }}>
      <Select
        options={options} 
        styles={customStyles} 
        placeholder={placaholder}
        onChange={(resp)=>onChange(resp)}
        isSearchable={true}
        menuPlacement={menuPlacement}  
        menuPosition="absolute"
      />
    </div>
  );
};

export default SelectBig;
