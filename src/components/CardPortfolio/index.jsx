import React from "react";
import iconGithub from "assets/svg/github.png";

const CardPortfolio = ({ title, url, image, repository, technologies }) => {
    const urlImage = `${process.env.REACT_APP_URL}/assets/img/${image}`;
    return (
        <>
            <img
                className="card-portfolio-image"
                src={urlImage}
                alt="portfolio"
            />
            <div className="card-portfolio-footer">
                <h5>{title}</h5>
                <span>{technologies}</span>
                <br />

                <a href={url} target="_blank" rel="noopener noreferrer">
                    VISITAR SITIO ▶
                </a>
                <a href={repository} target="_blank" rel="noopener noreferrer">
                    <img
                        className="card-portfolio-footer-icon"
                        src={iconGithub}
                        alt="icon github"
                    />
                </a>
            </div>
        </>
    );
};

export default CardPortfolio;
