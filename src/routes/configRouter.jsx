import { InfoPerson } from "../components/InfoPerson";
import Spinner from "../components/molecules/pooput-spinner/pooput-spinner";
import Calificasion from "../components/molecules/qualification/qualification";
import Home from "../pages/home/Home";
import PricePage from "../pages/price-page/PricePage";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/price", element: <PricePage /> },
  { path: "/inf-person", element: <InfoPerson /> },
  { path: "/calificasion", element: <Calificasion /> },
  { path: "/spinner", element: <Spinner /> },
];
