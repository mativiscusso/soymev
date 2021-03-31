import React from 'react';
import './Button.scss'

const Button = ({text}) => {
    return (
        <button className="btn-primary">
            {text}
        </button>
    );
}

export default Button;
