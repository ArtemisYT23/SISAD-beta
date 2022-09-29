import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Dashboard from "../../Views/Dashboard";
import Documentary from "../../Views/Documentary";
import Managment from "../../Views/Managment";
import PageInitial from "../../Views/PageInitial";
import Facturation from "../../Views/Facturation";
import Resumen from "../../Views/Resumen";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const { modalCore, sesion } = useSelector((store) => store);
  const { Selection } = modalCore;
  const { TockenUser } = sesion;

  return (
    <BrowserRouter>
      {Selection.length != 0 && <NavBar />}
      <Routes>
        <Route exact path="/" element={<PageInitial />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="managment" element={<Managment />} />
        <Route exact path="documentary" element={<Documentary />} />
        <Route exact path="facturation" element={<Facturation />} />
        <Route exact path="resumen" element={<Resumen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
