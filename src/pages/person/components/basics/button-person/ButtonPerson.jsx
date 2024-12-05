import React from "react";
import Button from "../../../../../components/basic/button/Button";

const ButtonPerson = ({ children }) => {
  return (
    <Button>
      <div>
        Este es solo de Persona
        <br />
        {children}
      </div>
    </Button>
  );
};

export default ButtonPerson;
