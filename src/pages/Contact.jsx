import React from 'react';
import Layout from '../layout/Layout'
import TitlePage from '../components/TitlePage'
import FormContact from '../components/FormContact'
import logoEmail from '../assets/svg/email.svg'
import logoLinkdin from '../assets/svg/linkedin.svg'
import logoCV from '../assets/svg/cv.svg'
import logoGithub from '../assets/svg/github.svg'
import logoCel from '../assets/svg/celular.svg'


const Contact = () => {
    return (
        <Layout>
        <section id="contact">
            <FormContact/>
            <div className="info-contact">
                <div className="item-info-contact">
                    <img src={logoLinkdin} alt="linkedin"/>
                    <a href="https://www.linkedin.com/in/mati-viscusso/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/mati-viscusso/</a>
                </div>
                <div className="item-info-contact">
                    <img src={logoGithub} alt="github"/>
                    <a href="https://github.com/mativiscusso" target="_blank" rel="noopener noreferrer">https://github.com/mativiscusso</a>
                </div>
                <div className="item-info-contact">
                    <img src={logoCel} alt="cel phone"/>
                    <a href="tel:+543416460725" target="_blank" rel="noopener noreferrer">+54 341 6 460 725</a>
                </div>
                <div className="item-info-contact">
                    <img src={logoEmail} alt="email"/>
                    <a href="mailto:mativiscusso@gmail.com" target="_blank" rel="noopener noreferrer">mativiscusso@gmail.com</a>
                </div>
                <div className="item-info-contact">
                    <img src={logoCV} alt="curriculum vitae"/>
                    <a href="http://localhost:3000/pdf/MatiasViscusso_CV.pdf" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
                </div>
            </div>
            <TitlePage title="charlamos"/>
        </section>
        </Layout>
    );
}

export default Contact;
