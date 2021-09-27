import React from 'react'
import f1 from '../img/f1.png'

function Clients() {
    return (
        <div className="clients-container container">
            <button className="prev-client nav-btn light-nav-btn">
                <i class="fas fa-caret-left"></i>
            </button>
            <div className="clients">
                <div className="client">
                    <img src={f1} alt="" />
                </div>
                <div className="client">
                    <img src={f1} alt="" />
                </div>
                <div className="client">
                    <img src={f1} alt="" />
                </div>
                <div className="client">
                    <img src={f1} alt="" />
                </div>
            </div>
            <button className="next-client nav-btn colored-nav-btn">
                <i class="fas fa-caret-right"></i>
            </button>
        </div>
    )
}

export default Clients
