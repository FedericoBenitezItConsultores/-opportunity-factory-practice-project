import React from "react";
import ContinueWithQuoteTryLaterDriverDiscount from "../../components/collections/popup/cards-pop-up/ContinueWithQuoteTryLaterDriverDiscount";
import ContinueWithQuoteReportBug from "../../components/collections/popup/cards-pop-up/ContinueWithQuoteReportBug";
import WeCannotGenerateTheDocument  from "../../components/collections/popup/cards-pop-up/WeCannotGenerateTheDocument"
// import PopupMain from "../../components/collections/popup/PopupMain";

export default function PersonPage() {
  return (
    <div>
      {/* <PopupMain /> */}
      <WeCannotGenerateTheDocument
        btn_misNegocios={() => console.log("btn_misNegocioswe")}
        btn_reintentar={() => console.log("btn_reintentawer")}
      />
    </div>
  );
}
