import React from "react";

import './header.css'
import './logo.css'
import './hamburger.css'
import './navLink.css'

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header>
            <div className="logo">
                <a href="/">
                    <div className="heart"></div>
                    <div className="club"></div>
                    <div className="diamond"></div>
                    <div className="spade"></div>
                </a>
            </div>
            <div className="links">
                <a href="/contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} >Contact</a>
                <a href="https://github.com/jakecolledge97" target="_blank" className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'} >Work</a>
                <a href="/about" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} >About</a>
            </div>
            <div className="hamburger-container">
                <div className="hamburger">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
}

export default Header;