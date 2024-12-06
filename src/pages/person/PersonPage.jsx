import React from "react";
import ContinueWithQuoteTryLaterDriverDiscount from "../../components/collections/popup/cards-pop-up/ContinueWithQuoteTryLaterDriverDiscount";
// import PopupMain from "../../components/collections/popup/PopupMain";

export default function PersonPage() {
  return (
    <div>
      {/* <PopupMain /> */}
      <ContinueWithQuoteTryLaterDriverDiscount
        btn_misNegocios={() => console.log("btn_misNegocioswe")}
        btn_reintentar={() => console.log("btn_reintentawer")}
      />
    </div>
  );
}
