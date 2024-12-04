import { InfoPerson } from "../components/infoPerson/InfoPerson";
import { AdditionalDiscount } from "../components/molecules/additional-discount/AdditionalDiscount";
import Spinner from "../components/molecules/pooput-spinner/pooput-spinner";
import Calificasion from "../components/molecules/qualification/qualification";
import Home from "../pages/home/Home";
import PricePage from "../pages/price-page/PricePage";

export const routes = [
  { path: "/", element: <InfoPerson /> },
  { path: "/price", element: <PricePage /> },
  { path: "/inf-person", element: <InfoPerson /> },
  { path: "/calificasion", element: <Calificasion /> },
  { path: "/AdditionalDiscount", element: <AdditionalDiscount /> },
  { path: "/spinner", element: <Spinner /> },
];
