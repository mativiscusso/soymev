import React from 'react';
import { Link } from 'react-router-dom'
import logoMev from '../../assets/svg/Logo-MEV.svg'
import MenuMobile from '../MenuMobile'

const Navbar = () => {
    return (
        <nav className="navbar">
        <Link to="/">
        <div className="navbar-logo">
                <img src={logoMev} alt="Logo MEV"/>
            </div>
        </Link>
           
            <div className="navbar-icon-hamburg">
            <MenuMobile right />
            </div>
            <div className="navbar-links">
                <ul>
                    <li className="hvr-underline-from-center"><Link to="/">home</Link></li>
                    <li className="hvr-underline-from-center"><Link to="/about">sobre mi</Link></li>
                    <li className="hvr-underline-from-center"><Link to="/portfolio">portfolio</Link></li>
                    <li className="hvr-underline-from-center"><Link to="/contact">contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
