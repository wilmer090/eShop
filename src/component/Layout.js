import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname != "/" && <Header />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
