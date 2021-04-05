import React from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const index = (props) => {
    return (
        <Menu {...props}>
            <Link className="bm-item" to="/">
                home
            </Link>

            <Link className="bm-item" to="/about">
                sobre mi
            </Link>

            <Link className="bm-item" to="/portfolio">
                portfolio
            </Link>

            <Link className="bm-item" to="/contact">
                contacto
            </Link>
        </Menu>
    );
};

export default index;
