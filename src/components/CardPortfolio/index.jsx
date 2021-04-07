import React from 'react';

const CardPortfolio = ({title, url, image}) => {
    const urlImage = `${process.env.REACT_APP_URL}/assets/img/${image}`
    return (
        <div>
            <img className="card-portfolio-image" src={urlImage} alt="portfolio"/>
            <div className="card-portfolio-footer">
                <h5>{title}</h5>
                <a href={url} target="_blank" rel="noopener noreferrer">VISITAR SITIO ▶</a>
            </div>
        </div>
    );
}

export default CardPortfolio;
