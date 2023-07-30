import React from 'react';
// @ts-ignore
import logo from '../../assets/popcorn.svg';
import './index.css';


const Header = () => {
    return (
        <div>
            <div className="container">
                <a href="#" className="logo">
                    <img className='logo' src={logo} alt="logo"/>
                </a>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV Shows</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Rankings</a></li>
                        <li><a href="#">Favorites</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;