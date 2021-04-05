import React from 'react';
import Layout from '../layout/Layout'
import Button from '../components/Button'
import avatarHome from '../assets/svg/Header-Image-mobile.svg'

const Home = () => {
    return (
        <Layout>
            <section id="home">
                <div className="home-image">
                    <img src={avatarHome} alt="Avatar Mati Viscusso"/>
                </div>
                <div className="home-text">
                    <h3>Hola, ¿que tal?</h3>
                    <h1>Soy Mati Viscusso</h1>
                    <h4>Desarrollador full stack & diseñador apasionado del front-end.</h4>
                </div>
                    <Button text="CHARLEMOS"/>
            </section>
        </Layout>
    );
}

export default Home;
