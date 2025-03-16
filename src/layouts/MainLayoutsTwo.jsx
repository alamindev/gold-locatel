import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import HeaderTwo from "../components/Shared/HeaderTwo";

const MainLayoutTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayoutTwo;
