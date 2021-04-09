import React, { useEffect, useState } from "react";

const Alert = ({ text, color, open }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(open)
        if (open) {
            setTimeout(() => setIsOpen(false), 3000);
        }
    }, [open]);

    return (
        <>
            {isOpen && (
                <div
                    style={{ backgroundColor: color }}
                    className="alert text-focus-in"
                >
                    {text}
                    <span className="alert-close">X</span>
                </div>
            )}
        </>
    );
};

export default Alert;
