import React, { useState } from "react";
import Button from "../Button";
import emailjs from "emailjs-com";
import SpinnerLoader from "../SpinnerLoader";
import Alert from "../Alert";

const FormContact = () => {
    const [isSending, setIsSending] = useState(false);
    const [messageResult, setMessageResult] = useState({ color: "", msg: "" });
    const [formData, setFormData] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const validateName = (e) => {
        setFormData({ ...formData, [e.target.value]: e.target.value });
        if (e.target.value === "") {
            setNameError("El campo no puede estar vacío");
        } else {
            setNameError("");
        }
    };
    const validateEmail = (e) => {
        setFormData({ ...formData, [e.target.value]: e.target.value });
        if (e.target.value === "") {
            setEmailError("El campo no puede estar vacío");
        } else {
            setEmailError("");
        }
    };
    const validateMessage = (e) => {
        setFormData({ ...formData, [e.target.value]: e.target.value });
        if (e.target.value === "") {
            setMessageError("El campo no puede estar vacío");
        } else {
            setMessageError("");
        }
    };
    const sendEmail = (e) => {
        e.preventDefault();
        setMessageResult({});
        if (!formData) {
            setMessageResult({
                color: "#ff2222ab",
                msg: "Debe completar todos los campos",
            });
            return;
        } else {
            if (!nameError && !emailError && !messageError) {
                setIsSending(true);
                emailjs
                    .sendForm(
                        "service_gz8shzo",
                        "template_cbpundb",
                        e.target,
                        "user_QGXjxMAhaOsHcnNV2kW1y"
                    )
                    .then(
                        (result) => {
                            setIsSending(false);
                            setMessageResult({
                                color: "#47ff2291",
                                msg: "Mensaje enviado",
                            });
                        },
                        (error) => {
                            setIsSending(false);
                            setMessageResult({
                                color: "#ff2222ab",
                                msg: "Ups! Hubo un inconveniente",
                            });
                        }
                    );
            } else {
                setMessageResult({
                    color: "#ff2222ab",
                    msg: "Hay errores en el formulario",
                });
                return;
            }
        }
        e.target.reset();
    };
    return (
        <form id="form-contact" method="POST" action="#" onSubmit={sendEmail}>
            <div className="form-control">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" onBlur={validateName} />
                <small className="error-field">{nameError}</small>
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onBlur={validateEmail} />
                <small className="error-field">{emailError}</small>
            </div>
            <div className="form-control">
                <label htmlFor="message">Mensaje</label>
                <textarea
                    name="message"
                    id="message"
                    cols="20"
                    rows="5"
                    onBlur={validateMessage}
                ></textarea>
                <small className="error-field">{messageError}</small>
            </div>
            <br />
            {isSending ? (
                <SpinnerLoader />
            ) : (
                <Button text="Enviar Mensaje" isSubmit={true} />
            )}
            {!isSending && (
                <Alert text={messageResult.msg} color={messageResult.color} />
            )}
        </form>
    );
};

export default FormContact;
