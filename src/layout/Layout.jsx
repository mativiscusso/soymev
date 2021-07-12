import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main id="layout-page">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
