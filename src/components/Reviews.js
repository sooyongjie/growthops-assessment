import React from 'react'

function Reviews() {
    return (
        <div className="reviews-container container">
            <div className="review">
                <div>
                    <p className="reviewer"><span>ALEXIS SIMPSON</span> - CEO & Developer</p>
                </div>
                <p className="review-text">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facere iusto placeat nesciunt veniam voluptatum assumenda tempore odit neque, aut dolores dolor illum ducimus mollitia! Veniam eligendi blanditiis ipsam incidunt. "
                </p>
            </div>
            <div className="buttons">
                <button className="prev-client nav-btn light-nav-btn">
                    <i class="fas fa-caret-left"></i>
                </button>
                <button className="next-client nav-btn dark-nav-btn">
                    <i class="fas fa-caret-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Reviews
