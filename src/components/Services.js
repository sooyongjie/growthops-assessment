import React from 'react'
import Heading from './Heading'

function Services() {
    return (
        <div className="services container">
            <Heading type="1,2" text="WHAT WE " highlight="OFFER" subtitle="We offer our customers the best services & solutions, this is our list of main services"/>
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
