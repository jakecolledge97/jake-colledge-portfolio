import React from "react";
import NavLinks from "./navLinks/NavLinks";
import Hamburger from "./hamburger/Hamburger";
import Logo from "./logo/Logo";

import './header.css'

const Header = () => {
    return ( 
        <header>
            <Logo />
            <NavLinks />
            <Hamburger />
        </header>
     );
}
 
export default Header;