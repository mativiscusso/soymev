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
                    <div className="home-image swing-in-right-bck">
                        <img
                            className="img-fluid"
                            src={avatarHome}
                            alt="Avatar Mati Viscusso"
                        />
                    </div>
                    <div className="home-text slide-in-left">
                        <h3 className="swing-in-right-bck">Hola, ¿que tal?</h3>
                        <h1 className="text-focus-in text-pop-up-top">
                            Soy Mati Viscusso
                        </h1>
                        <h4 className="swing-in-right-bck">
                            Desarrollador full stack
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
