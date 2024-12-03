import React, { useEffect } from "react";
import PriceTemplate from "../../components/template/price-template/PriceTemplate";
import Navbar from "../../components/organisms/navbar-2/Navbar";
import Calificasion from "../../components/molecules/qualification/qualification";
import { useNavigate } from "react-router-dom";

export default function PricePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("steps"));
    if (data) {
      let state = data.find((item) => item.id == 3).state;
      if (!(state == "completed")) navigate("/inf-person");
    }
  }, []);

  return (
    <div>
      <Calificasion />
      <Navbar />
      <PriceTemplate />
    </div>
  );
}
