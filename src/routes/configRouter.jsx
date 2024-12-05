import { PanelInformation } from "../components/collections/panel-box/PanelInformation";
import PersonPage from "../pages/person/PersonPage";
import QuotationPage from "../pages/quotation/QuotationPage";

export const routes = [
  { path: "/", element: <PersonPage /> },
  { path: "/quotation", element: <QuotationPage /> },
  
];
