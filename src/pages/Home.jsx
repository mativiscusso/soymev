import React from "react";
import Layout from "../layout/Layout";
import Button from "../components/Button";
import avatarHome from "../assets/svg/Header-Image.svg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Home = () => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <Layout>
            <animated.div style={animation}>
                <section id="home">
                    <div className="home-image">
                        <img
                            className="img-fluid"
                            src={avatarHome}
                            alt="Avatar Mati Viscusso"
                        />
                    </div>
                    <div className="home-text">
                        <h3>Hola, ¿que tal?</h3>
                        <h1>Soy Mati Viscusso</h1>
                        <h4>
                            Desarrollador full stack & diseñador apasionado del
                            front-end.
                        </h4>
                    <br />
                    <Link to="/contact" className="home-btn">
                        <Button text="CHARLEMOS" />
                    </Link>
                    </div>
                </section>
            </animated.div>
        </Layout>
    );
};

export default Home;
