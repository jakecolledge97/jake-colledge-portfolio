import React, { useState } from "react";
import Header from "../header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import {
    Routes,
    Route
} from "react-router-dom";

import './main.css'


const Main = () => {

    return (
        <>
            <Header />
            <main>
                <Routes >
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </main>
        </>
    );
}

export default Main;