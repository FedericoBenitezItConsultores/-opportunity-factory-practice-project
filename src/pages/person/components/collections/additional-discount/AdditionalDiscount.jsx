import React, { useState } from "react";
import styles from "../additional-discount/AdditionalDiscount.module.css";
import iconCheck from "../../../../../assets/icons/svg/iconCheck.svg";
import { PanelInformation } from "../../../../../components/collections/panel-box/PanelInformation";
import SelectBig from "../../basics/select-big/SelectBig";
import { Input } from "../../../../../components/basic/input/Input";
import CardDiscount from "../card-discount/CardDiscount";
import WeddingYellow from "../../../../../assets/icons/svg/WeddingYellow.svg";
import CombinedShape1 from "../../../../../assets/icons/svg/CombinedShape1.svg";
import CombinedShape2 from "../../../../../assets/icons/svg/CombinedShape2.svg";
// import WeddingYellow from "../../../../../assets/icons/svg/WeddingYellow.svg";

const AdditionalDiscount = () => {
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [stateCard, setStateCard] = useState(0);

  const identidades = [
    { value: "opcion1", type: "0", label: "Cédula de ciudadanía" },
    { value: "opcion2", type: "1", label: "Cédula de extranjería" },
    { value: "opcion3", type: "2", label: "Carnet Diplomático" },
    { value: "opcion4", type: "0", label: "Pasaporte" },
    { value: "opcion5", type: "1", label: "Tarjeta de Identidad" },
    { value: "opcion6", type: "0", label: "Registro Civil" },
    { value: "opcion7", type: "1", label: "Permiso Especial de Permanencia" },
    { value: "opcion8", type: "2", label: "Documento de Identidad Consular" },
    { value: "opcion9", type: "0", label: "Certificado de Nacimiento" },
    {
      value: "opcion10",
      type: "2",
      label: "Número Único de Identificación Personal (NIUP)",
    },
  ];

  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
  };

  const handleChangeDiscount = () => {
    setStateCard((prevState) => (prevState === 2 ? 0 : prevState + 1));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Descuento adicional</h3>
      <div className={styles.checkboxContainer}>
        <div
          onClick={() => setChecked(!checked)}
          className={styles.squareChecked}
        >
          {checked && (
            <img width={"16px"} height={"14px"} src={iconCheck} alt="" />
          )}
        </div>
        <label htmlFor="descuentoConyuge" className={styles.label}>
          Deseo utilizar el descuento de mi cónyuge
        </label>
      </div>
      <div>
        <PanelInformation
          parrafo1="El uso del descuento del cónyuge estará sujeto a posteriores revisiones y validaciones"
          parrafo2={
            checked
              ? "Se aplicará siempre el descuento más alto entre conductor y cónyuge."
              : " "
          }
        />
      </div>
      {checked && (
        <>
          <div className={styles.container_form}>
            <SelectBig
              options={identidades}
              placaholder="Tipo de identificación *"
              onChange={handleSelectChange}
              value={selectedOption}
            />
            <Input />
          </div>
          <button
            style={{
              position: "fixed",
              top: "45%",
              right: "20px",
            }}
            onClick={handleChangeDiscount}
          >
            Cambio de descuento
          </button>
          <p className={styles.info}>
            Ingresa la identificación de tu cónyuge si quieres aplicar su
            descuento
          </p>

          {stateCard === 0 && (
            <div className={styles.cuadro}>
              %<br />
              El porcentaje de descuento de tu cónyuge es:
            </div>
          )}

          {stateCard === 1 && (
            <CardDiscount
              title="Descuento de cónyuge"
              text1="De acuerdo al expertis del conductor,"
              porcentaje={{
                text: "20% OFF",
                color: "#D32F2F",
                textDescuento:
                  "No aplica por descuento menor. Se aplica descuento del conductor.",
                icon: CombinedShape2,
                bg: "#F9E1E1",
                colorIcon: "#aa0000",
                img: WeddingYellow,
              }}
              layerImageSrc={WeddingYellow}
            />
          )}

          {stateCard === 2 && (
            <CardDiscount
              title="Descuento de cónyuge"
              text1="De acuerdo al expertis del conductor,"
              porcentaje={{
                text: "30% OFF",
                color: "#28A3AF",
                textDescuento:
                  "Aplica y se prioriza el descuento del conductor",
                icon: CombinedShape1,
                bg: "#E1F2E6",
                colorIcon: "#00aa00",
                img: WeddingYellow,
              }}
              layerImageSrc={WeddingYellow}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AdditionalDiscount;
