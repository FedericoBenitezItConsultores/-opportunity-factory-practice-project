import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./configRouter";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
