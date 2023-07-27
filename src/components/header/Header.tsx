import React from 'react';
// @ts-ignore
import logo from '../../assets/logo.png';
import './index.css';


const Header = () => {
    return (
        <div>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt="logo"/>
                </a>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV Shows</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;