import React from "react";
import TitlePage from "components/TitlePage";
import FormContact from "components/FormContact";
import { useSpring, animated } from "react-spring";

const Contact = () => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div style={animation}>
            <section id="contact">
                <TitlePage title={"Contacto"} />
                <FormContact />
            </section>
        </animated.div>
    );
};

export default Contact;
