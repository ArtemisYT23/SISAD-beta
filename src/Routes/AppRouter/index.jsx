import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Dashboard from "../../Views/Dashboard";
import Documentary from "../../Views/Documentary";
import Managment from "../../Views/Managment";
import PageInitial from "../../Views/PageInitial";
import Facturation from "../../Views/Facturation";
import Resumen from "../../Views/Resumen";
import { useSelector } from "react-redux";

const AppRouter = () => {
    
    const { modalCore} = useSelector((store) => store);
    const { Selection } = modalCore;

    return(
        <BrowserRouter>
        {Selection.length != 0 &&(
        <NavBar />
        )}
        <Routes>
            <Route exact path='/' element={<PageInitial />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="managment" element={<Managment />} />
            <Route path='documentary' element={<Documentary />} />
            <Route path='facturation' element={<Facturation />} />
            <Route path='resumen' element={<Resumen />} />
        </Routes>        
        </BrowserRouter>
    );
};

export default AppRouter;
