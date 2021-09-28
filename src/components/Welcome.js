import React from 'react'
import Heading from './Heading'

function Welcome() {
    return (
        <div className="welcome">
            <div className="background-img"></div>
            <div className="welcome-content">
                <p className="hint">WHAT ARE YOU WAITING FOR?</p>
                <h1>LET'S BE CREATIVE!</h1>
                <p className="subtitle">LOREM IPSUM DOLOR SIT AMET</p>
                <Heading type="2,1" highlight="START " text="DOING THAT" line="white" />
                <button onClick={() => {
                    document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
                }}>
                    <i className="fa fa-angle-down" />
                </button>
            </div>
        </div>
    )
}

export default Welcome
