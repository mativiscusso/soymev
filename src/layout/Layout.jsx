import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    const urlCV = `${process.env.REACT_APP_URL}/pdf/MatiasViscusso_CV.pdf`;

    return (
        <>
            <Navbar />
            <main id="layout-page">{children}</main>
            <footer>
                <div>
                    <a
                        href="mailto:mativiscusso@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        mativiscusso@gmail.com
                    </a>
                    <a href={urlCV} target="_blank" rel="noopener noreferrer">
                        Descargar <strong>Curriculum Vitae</strong>
                    </a>
                </div>
                Powered by <strong>soymev.com</strong>
            </footer>
        </>
    );
};

export default Layout;
