import React from 'react';

const CardPortfolio = ({title, url}) => {
    return (
        <div className="card-portfolio">
            <div className="card-portfolio-footer">
                <h3>{title}</h3>
                <h4>{url}</h4>
                <a href={url} target="_blank" rel="noopener noreferrer">VISITAR SITIO ▶</a>
            </div>
        </div>
    );
}

export default CardPortfolio;
