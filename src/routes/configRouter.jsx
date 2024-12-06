import WarningReturn from "../components/collections/popup/cards-pop-up/WarningReturn";

import PersonPage from "../pages/person/PersonPage";
import QuotationPage from "../pages/quotation/QuotationPage";
import CardPlan from "../pages/quotation/basic/card-plan/CardPlan"

export const routes = [
  { path: "/", element: <PersonPage /> },
  { path: "/quotation", element: <QuotationPage /> },
  { path: "/CardPlan", element: <CardPlan/> },
  { path: "/WarningReturn", element: <W/> },
  
];