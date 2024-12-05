import PersonPage from "../pages/person/PersonPage";
import QuotationPage from "../pages/quotation/QuotationPage";

export const routes = [
  { path: "/", element: <PersonPage /> },
  { path: "/quotation", element: <QuotationPage /> },
];
