import React from "react";
import Layout from "../layout/Layout";
import TitlePage from "../components/TitlePage";
import FormContact from "../components/FormContact";
import logoEmail from "../assets/svg/email.png";
import logoLinkdin from "../assets/svg/linkedin.png";
import logoCV from "../assets/svg/cv.png";
import logoGithub from "../assets/svg/github.png";
import logoCel from "../assets/svg/celular.png";
import contactGraphic from "../assets/svg/graphicContact.svg";
import { useSpring, animated } from "react-spring";

const Contact = () => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <Layout>
            <animated.div style={animation}>
                <section id="contact">
                    <FormContact />
                    <div className="info-contact">
                        <div className="info-contact-graphic">
                            <img
                                src={contactGraphic}
                                alt="graphic contact"
                                className="img-fluid"
                            />
                        </div>
                        <div className="item-info-contact">
                            <img src={logoLinkdin} alt="linkedin" />
                            <a
                                href="https://www.linkedin.com/in/mati-viscusso/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.linkedin.com/in/mati-viscusso/
                            </a>
                        </div>
                        <div className="item-info-contact">
                            <img src={logoGithub} alt="github" />
                            <a
                                href="https://github.com/mativiscusso"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://github.com/mativiscusso
                            </a>
                        </div>
                        <div className="item-info-contact">
                            <img src={logoCel} alt="cel phone" />
                            <a
                                href="tel:+543416460725"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                +54 341 6 460 725
                            </a>
                        </div>
                        <div className="item-info-contact">
                            <img src={logoEmail} alt="email" />
                            <a
                                href="mailto:mativiscusso@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                mativiscusso@gmail.com
                            </a>
                        </div>
                        <div className="item-info-contact">
                            <img src={logoCV} alt="curriculum vitae" />
                            <a
                                href="http://localhost:3000/pdf/MatiasViscusso_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Descargar <strong>Curriculum Vitae</strong>
                            </a>
                        </div>
                    </div>
                </section>
                <TitlePage title="contacto" />
            </animated.div>
        </Layout>
    );
};

export default Contact;
