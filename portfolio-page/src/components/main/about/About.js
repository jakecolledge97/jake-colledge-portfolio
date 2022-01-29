import React from "react";
import './about.css'

const About = () => {
    return (  
        <div className="about-container">
            <div className="quote">
                <h1><i>"Change is one of the most difficult things that we face, but change is inevitable"</i></h1>
                <p><i>- Joel Osteen</i></p>
            </div>
            <div className="about-me">
                <div className="info">
                    <div className="text">
                        <h1>The Path</h1>
                        <p>In 2014 I started my career as a hair-stylist. I worked in multiple salons expressing my creative design through hair-styles and colour. Though with any career, I have reached my ceiling. I feel I want to open the next door in my life.
                        < br/>
                        <br/>In 2022 I will start my career as a developer. I hope to gain skill and increase my knowledge. I am both nervous and excited for what is to come. 
                        </p>
                    </div>
                </div>
                <img src="/assets/me2.png" alt="design-pic" />
            </div>
        </div>
    );
}
 
export default About;