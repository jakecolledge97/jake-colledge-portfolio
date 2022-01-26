import React from "react";

import './navLink.css'

const NavLinks = () => {
    return (
        <div className="links">
            <button className="contact">Contact</button>
            <button className="about">About</button>
            <button className="home">Home</button>
        </div>
    );
}

export default NavLinks;