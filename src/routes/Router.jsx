import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./configRouter";
import Layout from "../layout/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={<Layout>{element}</Layout>} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
