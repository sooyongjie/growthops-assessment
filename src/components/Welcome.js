import React from 'react'

function Welcome() {
    return (
        <div className="welcome">
            <div className="background-img"></div>
            <div className="welcome-content">
                <p className="hint">WHAT ARE YOU WAITING FOR?</p>
                <h1>LET'S BE CREATIVE!</h1>
                <p className="subtitle">LOREM IPSUM DOLOR SIT AMET</p>
                <div className="proceed">
                    <div className="lines">
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <h2><span>START</span> DOING THAT</h2>
                    <div className="lines">
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>
                <button>
                    <i className="fa fa-angle-down" />
                </button>
            </div>
        </div>
    )
}

export default Welcome
