import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import warningIcons from "../../../assets/svg/warningicons.svg";
import CardDiscount from "../card-discount/CardDiscount";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import imgConyugal from "../../../assets/svg/Wedding_Ring_CMYK_Yellow.svg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Spinner from "../pooput-spinner/pooput-spinner";
export const AdditionalDiscount = () => {
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar el popup
  const [selectValue, setSelectValue] = useState(0);
  const [numeroTI, setNumeroTI] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const handleCheckboxChange = (e) => {
    if (!e.target.checked) return setShowPopup(e.target.checked);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPopup(e.target.checked); // Muestra el popup si el checkbox está marcado
    }, 1000);
  };
  const identidades = [
    { value: "opcion1", type: "0", label: "Cédula de extranjería" },
    { value: "opcion2", type: "1", label: "Carnet Diplomático" },
    { value: "opcion3", type: "2", label: "Pasaporte" },
    { value: "opcion4", type: "0", label: "Tarjeta de Identidad" },
    { value: "opcion5", type: "1", label: "Registro Civil" },
    {
      value: "opcion6",
      type: "2",
      label: "Número Único deIdentificación Personal (NIUP)",
    },
  ];
  useEffect(() => {
    if (selectValue && numeroTI > 6) {
      setTimeout(() => {
        setLoading(true);
        setTimeout(() => {
          setLoadingText(true);
          setTimeout(() => {
            setLoading(false);
            setLoadingText(false);
          }, 2000);
        }, 3000);
      }, 2000);
    }
  }, [selectValue, numeroTI]);
  return (
    <>
      {loading && <Spinner showText={loadingText} />}
      <div className={styles.container}>
        <div>
          <p className={styles.titulo}>Descuento adicional</p>
        </div>
        <div className={styles.checkboxGroups}>
          <div>
            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                onChange={handleCheckboxChange} // Control del checkbox
              />
              <p className={styles.titulo2}>
                Deseo utilizar el descuento de mi cónyuge
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.fallo}>
            <div className={styles.div_inf}>
              <div className={styles.div_inf1}>
                <img
                  className={styles.icons}
                  src={warningIcons}
                  alt="Warning Icon"
                />
                <p>
                  El uso del descuento del cónyuge estará sujeto a posteriores
                  revisiones y validaciones
                </p>
              </div>
              <div className={styles.inf2}>
                {" "}
                <p>
                  Se aplicará siempre el descuento más alto entre conductor y
                  cónyuge.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Popup */}
        {showPopup && (
          <div className={styles.popup}>
            <div className={styles.lineContainer}></div>
            <div className={styles.popupContent}>
              <p>
                Ingresa la identificación de tu cónyuge si quieres aplicar su
                descuento
              </p>
            </div>
            <div className={styles.inputContainer}>
              <select
                id="opciones"
                name="opciones"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className={styles.selectBox}
              >
                {identidades.map((option) => (
                  <option key={option.value} value={option.type}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Número de identificación"
                className={styles.inputBox}
                value={numeroTI}
                onChange={(e) => setNumeroTI(e.target.value)}
              />
            </div>
            <div className={styles.divCardDiscount}>
              {!loading && !loadingText && numeroTI && selectValue == "2" && (
                <CardDiscount
                  title="Descuento de cónyuge"
                  text1={"De acuerdo al expertis del conductor,"}
                  porcentaje={{
                    text: "20% OFF",
                    color: "#D32F2F",
                    textDescuento:
                      "No aplica por descuento menor. Se aplica descuento del conductor.",
                    icon: ErrorOutlineIcon,
                    bg: "#F9E1E1",
                    colorIcon: "#aa0000",
                    img: imgConyugal,
                  }}
                />
              )}
              {!loading && !loadingText && numeroTI && selectValue == "1" && (
                <CardDiscount
                  title="Descuento de cónyuge"
                  text1={"De acuerdo al expertis del conductor,"}
                  porcentaje={{
                    text: "30% OFF",
                    color: "#28A3AF",
                    textDescuento:
                      "Aplica y se prioriza el descuento del conductor",
                    icon: CheckCircleOutlineIcon,
                    bg: "#E1F2E6",
                    colorIcon: "#00aa00",
                    img: imgConyugal,
                  }}
                />
              )}
            </div>
            {!numeroTI ||
              selectValue == "0" ||
              ((loading || loadingText) && (
                <div className={styles.cuadro}>
                  %<br />
                  El porcentaje de descuento de tu cónyuge es:
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
