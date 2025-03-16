import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import MainLayoutTwo from "../layouts/MainLayoutsTwo";
import Home from "../pages/Home";
import HomeTwo from "../pages/HomeTwo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/home-two" element={<MainLayoutTwo />}>
        <Route index element={<HomeTwo />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
