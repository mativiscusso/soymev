import React from "react";
import Layout from "../layout/Layout";
import TitlePage from "../components/TitlePage";
import matiImage from "../assets/svg/mativiscusso.svg";
import iconsFront from "../assets/svg/Icons-front.svg";
import iconsBack from "../assets/svg/Icons-back.svg";
import iconsApi from "../assets/svg/Icons-api.svg";
import iconsDesign from "../assets/svg/Icons-design.svg";
import { useSpring, animated } from "react-spring";

const About = () => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <Layout>
            <animated.div style={animation}>
                <section id="about">
                    <div className="about-img text-focus-in">
                        <img src={matiImage} alt="imagen mati viscusso" />
                    </div>
                    <div className="about-text slide-in-left">
                        <div className="resenia">
                            <h2 className="title">reseña</h2>
                            <p>
                                Desarrollador Full Stack desde el año 2018 y
                                actualmente, docente de la carrera Full Stack
                                Node JS en Digital House S.A.
                            </p>
                            <p></p>
                            <p>
                                Pro activo, con vocación a la docencia y
                                capacidad de trabajo en equipo.
                            </p>
                            <p>JavaScript Lover 💛</p>
                        </div>
                        <div className="skills">
                            <h2 className="title">skills</h2>
                            <div className="enviroment">
                                <h4 className="subtitle">front-end</h4>
                                <p>HTML - CSS - SCSS - JavaScript - React</p>
                                <div className="brands">
                                    <img
                                        src={iconsFront}
                                        alt="icons front end"
                                    />
                                </div>
                            </div>
                            <div className="enviroment">
                                <h4 className="subtitle">api</h4>
                                <p>REST - GRAPHQL</p>
                                <div className="brands">
                                    <img src={iconsApi} alt="icons api" />
                                </div>
                            </div>
                            <div className="enviroment">
                                <h4 className="subtitle">back-end</h4>
                                <p>
                                    Node JS - Express JS - Typescript - MySQL -
                                    MongoDB
                                </p>
                                <div className="brands">
                                    <img src={iconsBack} alt="icons back end" />
                                </div>
                            </div>
                            <div className="enviroment">
                                <h4 className="subtitle">diseño</h4>
                                <p>Photoshop - illustrator - Figma</p>{" "}
                                <div className="brands">
                                    <img src={iconsDesign} alt="icons design" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TitlePage title="sobre mi" />
                </section>
            </animated.div>
        </Layout>
    );
};

export default About;
