import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Components/Home'
import Works from '../Components/Works'
import About from '../Components/About'
import { GlobalStyles } from "../Styles/Styles";

export default function Rotas(){
    return(
        <BrowserRouter>
            <GlobalStyles/>
            <Header rota='Home' rota2='Works' rota3='About' />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Works" element={<Works />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}