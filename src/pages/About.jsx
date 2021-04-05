import React from "react";
import Layout from "../layout/Layout";
import TitlePage from "../components/TitlePage";
import matiImage from '../assets/svg/mativiscusso.svg'

const About = () => {
    return (
        <Layout>
            <section id="about">
                <div className="about-img">
                    <img src={matiImage} alt="imagen mati viscusso" />
                </div>
                <div className="about-text">
                    <div className="resenia">
                        <h2 className="title">reseña</h2>
                        <p>
                            Desarrollador Full Stack con tendencia hacia Front a
                            la orden de hacer realidad tus ideas y deseos de
                            facilitar los procesos y acciones. ¿Cómo?
                            Sistematizando y digitalizándolo todo.
                        </p>
                        <p>
                            Docente de la carrera Full Stack Node en el
                            instituto Digital House quienes me brindan la
                            posibilidad de desarrollarme dia a dia en este
                            fantastico mundo de aprender-enseñar.
                        </p>
                        <p>
                            Es el inicio de una nueva era, donde prevalecerán,
                            quienes se unan a la tecnología.{" "}
                        </p>
                    </div>
                    <div className="skills">
                        <h2 className="title">skills</h2>
                        <div className="enviroment">
                            <h4 className="subtitle">front-end</h4>
                            <p>HTML - CSS - SCSS - JavaScript - React</p>
                            <div className="brands"></div>
                        </div>
                        <div className="enviroment">
                            <h4 className="subtitle">api</h4>
                            <p>REST - GRAPHQL</p>
                            <div className="brands"></div>
                        </div>
                        <div className="enviroment">
                            <h4 className="subtitle">back-end</h4>
                            <p>
                                Node JS - Express JS - Typescript - MySQL -
                                MongoDB
                            </p>
                            <div className="brands"></div>
                        </div>
                        <div className="enviroment">
                            <h4 className="subtitle">diseño</h4>
                            <p>Photoshop - illustrator - Figma</p>{" "}
                            <div className="brands"></div>
                        </div>
                    </div>
                </div>
            </section>
            <TitlePage title="sobre mi" />
        </Layout>
    );
};

export default About;
