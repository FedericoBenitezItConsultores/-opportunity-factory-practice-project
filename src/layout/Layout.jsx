import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header />
      {children}
    </div>
  );
};

export default Layout;
