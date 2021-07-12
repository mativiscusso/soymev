import React from "react";

export default function Footer() {
    const urlCV = `${process.env.REACT_APP_URL}/pdf/MatiasViscusso_CV.pdf`;

    return (
        <footer>
            <div>
                <a
                    href="mailto:mativiscusso@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📩 mativiscusso@gmail.com
                </a>
                <a href={urlCV} target="_blank" rel="noopener noreferrer">
                    📝 Descargar <strong>Curriculum Vitae</strong>
                </a>
            </div>
            Powered by <strong>soymev.com</strong>
        </footer>
    );
}
