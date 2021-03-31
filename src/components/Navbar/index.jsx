import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="" alt="Logo MEV"/>
            </div>
            <div className="navbar-icon-hamburg"></div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">sobre mi</Link></li>
                    <li><Link to="/portfolio">portfolio</Link></li>
                    <li><Link to="/contact">contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
