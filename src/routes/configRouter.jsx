import PersonPage from "../pages/person/PersonPage";
import FormEaseFeedback from "../pages/quotation/collection/form-ease-feedback/FormEaseFeedback";
import QuotationPage from "../pages/quotation/QuotationPage";

export const routes = [
  { path: "/", element: <PersonPage /> },
  { path: "/quotation", element: <QuotationPage /> },
  { path: "/FormEaseFeedback", element: <FormEaseFeedback /> },
];
