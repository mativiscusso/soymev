import React from "react";
import { NavLink } from "react-router-dom";
import logoMev from "../../assets/svg/Logo-MEV.svg";
import MenuMobile from "../MenuMobile";
import logoLinkdin from "../../assets/svg/linkedin.png";
import logoGithub from "../../assets/svg/github.png";


const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar-logo">
                    <img src={logoMev} alt="Logo MEV" />
                </div>
            </NavLink>

            <div className="navbar-icon-hamburg">
                <MenuMobile right />
            </div>
            <div className="navbar-links">
                <ul>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="/about"
                        >
                            sobre mi
                        </NavLink>
                    </li>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="/portfolio"
                        >
                            portfolio
                        </NavLink>
                    </li>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="/contact"
                        >
                            contacto
                        </NavLink>
                    </li>
                    <li className="hvr-underline-from-center">
                        <a href="https://www.linkedin.com/in/mati-viscusso/" target="_blank" rel="noopener noreferrer">
                            <img src={logoLinkdin} alt="Linkedin Mati Viscusso"/>
                        </a>
                    </li>
                    <li className="hvr-underline-from-center">
                        <a href="https://github.com/mativiscusso" target="_blank" rel="noopener noreferrer">
                            <img src={logoGithub} alt="Github Mati Viscusso"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
