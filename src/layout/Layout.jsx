import React from "react";
import NavBar from "./nav-bar/NavBar";
import FooterButtons from "../components/collections/footer-buttons/FooterButtons";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar /> {children}
    </div>
  );
};

export default Layout;
