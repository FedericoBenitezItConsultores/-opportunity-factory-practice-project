import Calificasion from "../components/molecules/qualification/qualification";
import Home from "../pages/home/Home";
import PricePage from "../pages/price-page/PricePage";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/price", element: <PricePage /> },
  { path: "/calificasion", element: <Calificasion /> },
];
