import React, {useState} from "react";
import './home.css';
import './aboutLink.css'


const Home = (handlePageChange, currentPage) => {
    
    return (
        <div className="home-container">
            <div className="quote">
                <h1><i>"People should pursue what they're passionate about. That will make them happier than pretty much anything else."</i></h1>
                <p><i>- Elon Musk</i></p>
            </div>
            <div className="about-me">
                <img src="/assets/me.png" alt="design-pic" />
                <div className="info">
                    <div className="text">
                        <h1>Hello Everyone! I'm Jake.</h1>
                        <p>On a journey to further my skills as a full stack developer, currently studying at Adelaide University's Coding Bootcamp.</p>
                    </div>
                    <a href="#about" className={currentPage === 'About' ? 'nav-link' : 'nav-link active'} onClick={() => handlePageChange('About')}>Learn about me</a>
                </div>
            </div>
        </div>
    );
}

export default Home;