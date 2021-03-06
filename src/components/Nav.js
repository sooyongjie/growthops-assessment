import React from 'react'
import logo from '../img/logo.svg'

function Nav() {
    return (
        <nav>
            <img src={logo} alt="" />
            <button type="button">
                <ul>
                    <a href="">
                        <li>HOME</li>
                    </a>
                    <a href="" className="active">
                        <li>PORTFOLIO</li>
                    </a>
                    <a href="">
                        <li>BLOG</li>
                    </a>
                    <a href="">
                        <li>PAGES</li>
                    </a>
                    <a href="">
                        <li>FEATURES</li>
                    </a>
                    <a href="">
                        <li>FEATURES</li>
                    </a>
                    <a href="">
                        <li>MEGA MENU</li>
                    </a>
                    <a href="">
                        <li>CONTACT</li>
                    </a>
                    <i className="fas fa-search" />
                </ul>
                <div>
                    <i class="fas fa-bars"></i>
                </div>
            </button>
        </nav>
    )
}

export default Nav
