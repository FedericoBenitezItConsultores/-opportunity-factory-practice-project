import React, { useState } from "react";
import FormInfPerson from "./components/collections/form-inf-person/FormInfPerson";
import style from "./styles.module.css";
import PanelIdentification from "./components/basics/panel-identification/panelIdentification";
import CardDiscount from "./components/collections/card-discount/CardDiscount";
import AdditionalDiscount from "./components/collections/additional-discount/AdditionalDiscount";
import FooterButtons from "../../components/collections/footer-buttons/FooterButtons";
import { useForm } from "react-hook-form";
import TestPopup from "../../components/collections/test-popup/TestPopup";
import { SnipperPopup } from "../../components/collections/popup/snipper/SnipperPopup";
import { useNavigate } from "react-router-dom";

export default function PersonPage() {
  const {
    control,
    register,
    setError,
    clearErrors,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formValues = watch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    setSnipper(true);
    setTimeout(() => {
      setShowText(true);
      setTimeout(() => {
        navigate("/quotation");
      }, 2000);
    }, 2000);
  };
  const [snipper, setSnipper] = useState(false);
  const [showText, setShowText] = useState(false);
  return (
    <>
      {snipper && <SnipperPopup showText={showText} />}
      <div className={style.container_main}>
        <h1 className={style.persona}>Persona</h1>
        <p className={style.information}>
          Ingresa la información de la persona, conocerla es importante para
          hacer una propuesta
        </p>
        <p className={style.information2}>acorde a sus necesidades</p>
        <p className={style.parragraf}>Los campos con (*) son obligatorios</p>
        <PanelIdentification />
        <form
          style={{ marginTop: "26px" }}
          onSubmit={handleSubmit(onSubmit)}
          className={style.container_form}
        >
          <FormInfPerson
            register={register}
            errors={errors}
            control={control}
            setError={setError}
            clearErrors={clearErrors}
            formValues={formValues}
          />
          <CardDiscount />
          <div className={style.AdditionalDiscount}>
            <AdditionalDiscount
              formValues={formValues}
              clearErrors={clearErrors}
              setError={setError}
              register={register}
              errors={errors}
              control={control}
              watch={watch}
            />
          </div>
          <div className={style.FooterButtons}>
            <FooterButtons
              btnVolver={{
                onClick: () => console.log("volver"),
                type: "button",
              }}
              btnGuardar={{
                type: "button",
                onClick: () => console.log("guardar"),
              }}
              btnContinuar={{
                type: "submit",
              }}
            />
          </div>
        </form>
        <TestPopup />
      </div>
    </>
  );
}
