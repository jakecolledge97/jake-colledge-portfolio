import React, { useState } from "react";
import Header from "../header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import './main.css'


const Main = () => {
    // const [currentPage, setCurrentPage] = useState('Home')
    // const handlePageChange = (page) => setCurrentPage(page)

    // const renderPage = () => {
    //     if (currentPage === 'Home') {
    //         return <Home currentPage={currentPage} handlePageChange={handlePageChange} />
    //     } else if (currentPage === 'About') {
    //         return <About />
    //     } else if (currentPage === 'Contact') {
    //         return <Contact />
    //     }
    // }



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
            {/* <main>
                {renderPage()}
            </main> */}
        </>
    );
}

export default Main;