import React from "react";
import './hamburger.css'

const Hamburger = () => {
    
    const hamburger = () => {
        console.log('testing')
    }

    return (
        <div className="hamburger-container">
            <div className="hamburger" onClick={() => hamburger()}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
 
export default Hamburger;