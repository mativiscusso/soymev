import React from "react";
import { push as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import logoLinkdin from "../../assets/svg/linkedin.png";
import logoGithub from "../../assets/svg/github.png";

const index = (props) => {
    return (
        <Menu {...props}>
            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="/about"
            >
                sobre mi
            </NavLink>

            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="/portfolio"
            >
                portfolio
            </NavLink>

            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="/contact"
            >
                contacto
            </NavLink>
            <div className="d-flex">
                <li className="hvr-underline-from-center">
                    <a
                        href="https://www.linkedin.com/in/mati-viscusso/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-3"
                    >
                        <img src={logoLinkdin} alt="Linkedin Mati Viscusso" />
                    </a>
                </li>
                <li className="hvr-underline-from-center">
                    <a
                        href="https://github.com/mativiscusso"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-3"
                    >
                        <img src={logoGithub} alt="Github Mati Viscusso" />
                    </a>
                </li>
            </div>
        </Menu>
    );
};

export default index;
