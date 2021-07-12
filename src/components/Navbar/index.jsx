import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import logoMev from "assets/svg/Logo-MEV.svg";
import MenuMobile from "components/MenuMobile";
import logoLinkdin from "assets/svg/linkedin.png";
import logoGithub from "assets/svg/github.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <div className="navbar-logo">
                    <img src={logoMev} alt="Logo MEV" />
                </div>
            </Link>

            <div className="navbar-icon-hamburg">
                <MenuMobile right />
            </div>
            <div className="navbar-links">
                <ul>
                    <li className="hvr-underline-from-center">
                        <Link to="/#about">sobre mi</Link>
                    </li>
                    <li className="hvr-underline-from-center">
                        <Link to="/#portfolio">portfolio</Link>
                    </li>
                    <li className="hvr-underline-from-center">
                        <Link to="/#contact">contacto</Link>
                    </li>
                    <li className="hvr-underline-from-center">
                        <a
                            href="https://www.linkedin.com/in/mati-viscusso/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={logoLinkdin}
                                alt="Linkedin Mati Viscusso"
                            />
                        </a>
                    </li>
                    <li className="hvr-underline-from-center">
                        <a
                            href="https://github.com/mativiscusso"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={logoGithub} alt="Github Mati Viscusso" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
