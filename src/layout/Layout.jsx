import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main id="layout-page">{children}</main>
        </>
    );
};

export default Layout;
