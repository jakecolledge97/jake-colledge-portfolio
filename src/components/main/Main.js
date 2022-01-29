import React, {useState} from "react";
import Header from "../header/Header";
import Home from "./home/Home";
import About from "./about/About";


import './main.css'

const Main = () => {
    const [currentPage, setCurrentPage] = useState('Home')
    const handlePageChange = (page) => setCurrentPage(page)

    const renderPage = () => {
        if(currentPage === 'Home'){
            return <Home currentPage={currentPage} handlePageChange={handlePageChange}/>
        }else if(currentPage === 'About'){
            return <About />
        }
    }

    

    return (  
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main>
                {renderPage()}
            </main>
        </>  
    );
}
 
export default Main;