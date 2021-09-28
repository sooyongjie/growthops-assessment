import React from 'react'
import squares from '../img/tri-square.svg'

function Services() {
    return (
        <div className="services container">
            <div className="heading">
                <div className="title">
                    <div className="lines">
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <img src={squares} alt="" />
                    <h2>WHAT WE <span>OFFER</span></h2>
                    <img src={squares} alt="" />
                    <div className="lines">
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>
                <p className="subtitle">We offer our customers the best services & solutions, this is our list of main services</p>
            </div>
            <div className="feature-list">
                <div className="feature">
                    <div className="feature-icon">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div className="feature-name">RESPONSIVE & MULTIPURPOSE</div>
                    <p className="feature-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim distinctio fugiat a quisquam ad!</p>
                    <button>
                        <span>READ MORE</span>
                    </button>
                </div>
                <div className="feature">
                    <div className="feature-icon">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div className="feature-name">RESPONSIVE & MULTIPURPOSE</div>
                    <p className="feature-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim distinctio fugiat a quisquam ad!</p>
                    <button>
                        <span>READ MORE</span>
                    </button>
                </div>
                <div className="feature">
                    <div className="feature-icon">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div className="feature-name">RESPONSIVE & MULTIPURPOSE</div>
                    <p className="feature-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim distinctio fugiat a quisquam ad!</p>
                    <button>
                        <span>READ MORE</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services
