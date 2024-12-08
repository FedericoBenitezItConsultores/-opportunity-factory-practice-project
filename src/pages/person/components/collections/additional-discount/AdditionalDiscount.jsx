import React, { useState, useEffect } from "react";
import styles from "../additional-discount/AdditionalDiscount.module.css";
import iconCheck from "../../../../../assets/icons/svg/iconCheck.svg";
import { PanelInformation } from "../../../../../components/collections/panel-box/PanelInformation";
import SelectBig from "../../basics/select-big/SelectBig";
import { Input } from "../../basics/input/Input";
import CardDiscount from "../card-discount/CardDiscount";
import WeddingYellow from "../../../../../assets/icons/svg/WeddingYellow.svg";
import CombinedShape1 from "../../../../../assets/icons/svg/CombinedShape1.svg";
import CombinedShape2 from "../../../../../assets/icons/svg/CombinedShape2.svg";
import { identidades } from "./utils/indentidades";
import { getValidationRules } from "./utils/validationsRules";
import { SnipperPopup } from "../../../../../components/collections/popup/snipper/SnipperPopup";
import { use } from "react";
const AdditionalDiscount = ({
  register,
  errors,
  control,
  setError,
  clearErrors,
  watch, // Asegúrate de pasar `watch` desde el `useForm`
}) => {
  const [checked, setChecked] = useState(false);
  const [stateCard, setStateCard] = useState(0);
  const [selectedIdentificacion, setSelectedIdentificacion] = useState("");

  const identificacionValue = watch("identificación"); // Observar el valor del input

  useEffect(() => {
    setSelectedIdentificacion(identificacionValue);
    if (!identificacionValue) return;

    const validationRules = getValidationRules(selectedIdentificacion);
    if (validationRules?.pattern) {
      const isValid = validationRules.pattern.value.test(
        selectedIdentificacion
      );
      if (!isValid) {
        setError("identificación", {
          type: "manual",
          message: validationRules.pattern.message,
        });
      } else {
        clearErrors("identificación");
      }
    }
  }, [identificacionValue, selectedIdentificacion, setError, clearErrors]);
  const [showText, setShowText] = useState(false);
  const [snipper, setSnipper] = useState(false);

  const handleChecked = (e) => {
    if (e) {
      setSnipper(true);
      setTimeout(() => {
        setShowText(true);
        setTimeout(() => {
          setSnipper(false);
          setShowText(false);
          //   navigate("/quotation");
        }, 2000);
      }, 1000);
      return setChecked(!checked);
    }
    setChecked(!checked);
  };
  return (
    <>
      {snipper && <SnipperPopup showText={showText} />}
      <div className={styles.container}>
        <h3 className={styles.title}>Descuento adicional</h3>
        <div className={styles.checkboxContainer}>
          <div
            onClick={() => handleChecked(!checked)}
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
              <div className={styles.wrapper}>
                <SelectBig
                  placeholder="Tipo de identificación"
                  name="typeIdentification"
                  control={control}
                  options={identidades}
                  errors={errors}
                  rules={{ required: "Debes seleccionar una identificación" }}
                  onChange={(selectedOption) => {
                    setSelectedIdentificacion(selectedOption.value);
                  }}
                />
              </div>
              <Input
                label="Identificación"
                id="identificación"
                control={control}
                {...register(
                  "identificación",
                  getValidationRules(selectedIdentificacion)
                )}
                style={{ padding: "30px 0 0 5px" }}
                TypeStyle={
                  errors?.identificación?.message ? "secondary" : "primary"
                }
              />
            </div>
            <button
              style={{
                position: "fixed",
                top: "45%",
                right: "20px",
                zIndex: 499,
              }}
              type="button"
              onClick={() => {
                setStateCard((prevState) =>
                  prevState === 2 ? 0 : prevState + 1
                );
              }}
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
    </>
  );
};

export default AdditionalDiscount;
