import React from 'react';

const Button = ({text, isSubmit}) => {
    return (
        <button className="btn-primary" type={isSubmit !== undefined ? "submit" : "button"}>
            {text}
        </button>
    );
}

export default Button;
