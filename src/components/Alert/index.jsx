import React, {useState} from 'react';

const Alert = ({text, color}) => {
    const [ visibility, setVisibility] = useState('block')

    const handleClose = () => {
        setVisibility('none')
    }
    return (
        <div style={{backgroundColor: color, display: visibility}} className="alert text-focus-in">
            {text}
            <span className="alert-close" onClick={handleClose}>X</span>
        </div>
    );
}

export default Alert;
