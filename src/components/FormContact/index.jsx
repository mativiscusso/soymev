import React from "react";
import Button from "../Button";

const FormContact = () => {
    return (
        <form id="form-contact" method="POST" action="#">
            <div className="form-control">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" />
            </div>
            <div className="form-control">
                <label htmlFor="name">Email</label>
                <input type="text" name="email" />
            </div>
            <div className="form-control">
                <label htmlFor="name">Mensaje</label>
                <textarea
                    name="message"
                    id="message"
                    cols="20"
                    rows="5"
                ></textarea>
            </div>
            <br/>
            <Button text="Enviar Mensaje" isSubmit={true}/>
        </form>
    );
};

export default FormContact;
